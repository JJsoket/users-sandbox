package com.users.sendbox.controllers;

import com.users.sendbox.model.AppUser;
import com.users.sendbox.model.ErrorResponse;
import com.users.sendbox.model.Responsible;
import com.users.sendbox.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@RestController
public class UserRestController {
    @Autowired
    private UserService service;

    @GetMapping("/api")
    public List<AppUser> getAll() {
        return service.getAll();
    }

    @GetMapping(value = "/api", params = {"field", "value"})
    public Responsible getBy(@RequestParam String field, @RequestParam String value, HttpServletResponse httpServletResponse) {
        Responsible response;
        if (value != null && !value.equals("")) {
            response = service.get(field, value);
            if (response == null) {
                httpServletResponse.setStatus(400);
                response = new ErrorResponse("No search matches with " + field + " = " + value + ".");
            }
        } else {
            httpServletResponse.setStatus(400);
            response = new ErrorResponse("Parameters of search can't be empty!");
        }
        return response;
    }

    @PostMapping("/api")
    public Responsible update(@RequestBody @Valid AppUser appUser) {
        return service.save(appUser);
    }

    @DeleteMapping("/api")
    public void delete(@RequestBody AppUser appUser) {
        service.delete(appUser.getId());
    }

    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ExceptionHandler(Exception.class)
    private Responsible invalidRequest(Exception e) {
        String msg = e.getMessage();
        ErrorResponse response;
        if (msg.contains("USERNAME")) {
            response = new ErrorResponse("User with that Username already exist.");
        } else if (msg.contains("EMAIL")) {
            response = new ErrorResponse("User with that Email already exist.");
        } else {
            response = new ErrorResponse(msg);
        }
        return response;
    }

    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ErrorResponse invalidRequest(MethodArgumentNotValidException e) {
        String msg = "Not valid data for persist:\n";
        String errorMsg = e.getMessage();
        if (errorMsg.contains("username")) {
            msg += "Username length mast be more then 4;\n";
        }
        if (errorMsg.contains("email")) {
            msg += "Email do not seems like email;\n";
        }
        if (errorMsg.contains("password")) {
            msg += "Password min length 4;";
        }
        msg = msg.trim();
        return new ErrorResponse(msg);
    }
}

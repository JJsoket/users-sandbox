package com.users.sendbox.controllers;

import com.users.sendbox.model.AppUser;
import com.users.sendbox.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserRestController {
    @Autowired
    private UserService service;

    @GetMapping("/api")
    public List<AppUser> getAll() {
        return service.getAll();
    }

    @PostMapping("/api")
    public AppUser create(@RequestBody AppUser appUser) {
        return service.save(appUser);
    }

    @DeleteMapping("/api")
    public void delete(@RequestBody AppUser appUser) {
        service.delete(appUser.getId());
    }
}

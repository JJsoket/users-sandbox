package com.users.sendbox.service;

import com.users.sendbox.model.AppUser;
import com.users.sendbox.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository repository;

    @Transactional(readOnly = true)
    public List<AppUser> getAll() {
        return repository.findAll();
    }

    public AppUser save(AppUser appUser) {
        return repository.save(appUser);
    }

    @Transactional(readOnly = true)
    public AppUser get(String field, String value) {
        if (field.equals("username")) {
            return repository.findByUsername(value);
        } else if (field.equals("email")) {
            return repository.findByEmail(value);
        }
        return null;
    }

    public void delete(int id) {
        repository.deleteById(id);
    }

    public void delete(String username) {
        repository.deleteByUsername(username);
    }

}

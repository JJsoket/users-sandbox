package com.users.sendbox.service;

import com.users.sendbox.model.AppUser;
import com.users.sendbox.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService implements UserDetailsService {
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
    public AppUser get(String name) {
        return repository.findByUsername(name);
    }

    public void delete(int id) {
        repository.deleteById(id);
    }

    public void delete(String username) {
        repository.deleteByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        AppUser appUser = repository.findByUsername(userName);
        if (appUser == null) {
            throw new UsernameNotFoundException(userName);
        }
        return User.builder()
                .username(appUser.getUsername())
                .password(appUser.getPassword())
                .roles("USER")
                .build();
    }

}

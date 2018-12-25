package com.users.sendbox.repository;

import com.users.sendbox.model.AppUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<AppUser, Integer> {
    List<AppUser> findAll();

    AppUser findByUsername(String username);

    AppUser findByEmail(String email);

    void deleteByUsername(String username);
}

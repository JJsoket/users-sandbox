package com.users.sendbox.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "USER")
public class AppUser implements Responsible {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", nullable = false)
    @JsonProperty("id")
    private Integer id;

    @NotBlank
    @Length(min = 4)
    @JsonProperty("username")
    @Column(name = "USERNAME", nullable = false, unique = true)
    private String username;

    @NotBlank
    @Length(min = 4)
    @JsonProperty("password")
    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @JsonIgnore
    private String matchingPassword;

    @NotBlank
    @Email
    @JsonProperty("email")
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    public String getMatchingPassword() {
        return matchingPassword;
    }

    public void setMatchingPassword(String matchingPassword) {
        this.matchingPassword = matchingPassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

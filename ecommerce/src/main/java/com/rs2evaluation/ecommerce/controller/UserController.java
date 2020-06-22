package com.rs2evaluation.ecommerce.controller;

import com.rs2evaluation.ecommerce.model.User;
import com.rs2evaluation.ecommerce.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

//    Self explanatory db queries

    @GetMapping(value = {"/get-user-by-name"})
    public @NotNull Iterable<User> getUserByName(String userName) {
        return userService.getUserByName(userName);
    }

    @RequestMapping(value = {"/get-user-by-id"})
    public @NotNull User getUserById(long id) {
        return userService.getUserById(id);
    }

    @RequestMapping(value = {"/save-user"})
    public @NotNull User saveUser(String userName) {
        System.out.println("Expected username");
        System.out.println(userName);
        return userService.save(new User(userName));
    }

}



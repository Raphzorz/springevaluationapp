package com.rs2evaluation.ecommerce.service;

import com.rs2evaluation.ecommerce.model.User;

import javax.validation.constraints.Min;
import java.util.List;

public interface UserService {

    User getUserById(@Min(value = 1L, message = "Invalid user ID.") long id);

    User save(User user);

    Iterable<User> getUserByName(String userName);

    List<Long> checkForPastPurchaseIdNotNull(Long id);

    int checkForExistence(Long id);

}

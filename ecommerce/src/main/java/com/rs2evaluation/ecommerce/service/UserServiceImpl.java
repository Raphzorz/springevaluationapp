package com.rs2evaluation.ecommerce.service;

import com.rs2evaluation.ecommerce.exception.ResourceNotFoundException;
import com.rs2evaluation.ecommerce.model.User;
import com.rs2evaluation.ecommerce.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.constraints.Min;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getUserById(@Min(value = 1L, message = "Invalid product ID.") long id) {
        return userRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Id not found"));
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public Iterable<User> getUserByName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    public List<Long> checkForPastPurchaseIdNotNull(Long id) {
        return userRepository.checkForPastPurchaseIdNotNull(id);
    }

    @Override
    public int checkForExistence(Long id) {
        return userRepository.checkForExistence(id);
    }
}



package com.rs2evaluation.ecommerce.repository;

import com.rs2evaluation.ecommerce.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {

    //    Query allows to check whether the passed user has purchased the products he/she as in his/her cart
    @Query(value = "select PRODUCT_ID from BASKET_PRODUCT bp where USER_ID = :id",
            nativeQuery = true)
    List<Long> checkForPastPurchaseIdNotNull(Long id);

    //    Check whether a user has any past purchases
    @Query(value = "select COUNT(USER_ID) FROM BASKET_PRODUCT where USER_ID = :id",
            nativeQuery = true)
    int checkForExistence(Long id);

    List<User> findByUserName(String userName);

}


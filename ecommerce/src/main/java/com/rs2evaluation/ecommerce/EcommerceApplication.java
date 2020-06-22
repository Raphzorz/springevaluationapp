package com.rs2evaluation.ecommerce;

import com.rs2evaluation.ecommerce.model.Product;
import com.rs2evaluation.ecommerce.model.User;
import com.rs2evaluation.ecommerce.service.ProductService;
import com.rs2evaluation.ecommerce.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EcommerceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcommerceApplication.class, args);
    }


//    Create some dummy data for testing

    @Bean
    CommandLineRunner runner(ProductService productService, UserService userService) {
        return args -> {
            productService.save(new Product("Skyrim", "Games"));
            productService.save(new Product("FFX14", "Games"));
            productService.save(new Product("CD Set", "Music"));
            productService.save(new Product("Electric Guitar", "Music"));
            productService.save(new Product("World of Warcraft", "Games"));
            productService.save(new Product("Eldest", "Books"));
            productService.save(new Product("Inkheart", "Books"));
            userService.save(new User("John"));
            userService.save(new User("Raphael"));
            userService.save(new User("Susan"));
            userService.save(new User("Alice"));
        };
    }

}

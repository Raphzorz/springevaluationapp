package com.rs2evaluation.ecommerce.service;

import com.rs2evaluation.ecommerce.model.Product;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Validated
public interface ProductService {

    @NotNull Iterable<Product> getAllProducts();

    Product getProduct(@Min(value = 1L, message = "Invalid product ID.") long id);

    Product save(Product product);

    Iterable<Product> getProductByKeyword(String keyword, String category);

    Iterable<Product> getProductByOnlyKeyword(String keyword);
}

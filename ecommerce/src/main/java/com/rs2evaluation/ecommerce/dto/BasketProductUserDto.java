package com.rs2evaluation.ecommerce.dto;

import com.rs2evaluation.ecommerce.model.Product;
import com.rs2evaluation.ecommerce.model.User;

//Data transfer object class

public class BasketProductUserDto {

    private Product product;
    private User user;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "OrderProductDto{" +
                "product=" + product +
                ", user=" + user +
                '}';
    }
}
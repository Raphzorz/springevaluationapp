package com.rs2evaluation.ecommerce.service;

import com.rs2evaluation.ecommerce.model.Basket;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Validated
public interface BasketService {

    @NotNull Iterable<Basket> getAllBaskets();

    Basket create(@NotNull(message = "The order cannot be null.") @Valid Basket basket);

    void update(@NotNull(message = "The order cannot be null.") @Valid Basket basket);
}

package com.rs2evaluation.ecommerce.service;

import com.rs2evaluation.ecommerce.model.BasketProduct;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Validated
public interface BasketProductService {

    BasketProduct create(@NotNull(message = "The products for order cannot be null.") @Valid BasketProduct basketProduct);
}

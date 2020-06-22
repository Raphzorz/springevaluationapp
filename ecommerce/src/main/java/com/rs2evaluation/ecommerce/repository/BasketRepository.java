package com.rs2evaluation.ecommerce.repository;

import com.rs2evaluation.ecommerce.model.Basket;
import org.springframework.data.repository.CrudRepository;

public interface BasketRepository extends CrudRepository<Basket, Long> {
}

package com.rs2evaluation.ecommerce.repository;

import com.rs2evaluation.ecommerce.model.BasketProduct;
import com.rs2evaluation.ecommerce.model.BasketProductUserPK;
import org.springframework.data.repository.CrudRepository;

public interface BasketProductRepository extends CrudRepository<BasketProduct, BasketProductUserPK> {
}

package com.rs2evaluation.ecommerce.service;

import com.rs2evaluation.ecommerce.model.BasketProduct;
import com.rs2evaluation.ecommerce.repository.BasketProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BasketProductServiceImpl implements BasketProductService {

    private BasketProductRepository basketProductRepository;

    public BasketProductServiceImpl(BasketProductRepository basketProductRepository) {
        this.basketProductRepository = basketProductRepository;
    }

//    Saves the basket

    @Override
    public BasketProduct create(BasketProduct basketProduct) {
        return this.basketProductRepository.save(basketProduct);
    }
}

package com.rs2evaluation.ecommerce.service;

import com.rs2evaluation.ecommerce.model.Basket;
import com.rs2evaluation.ecommerce.repository.BasketRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@Transactional
public class BasketServiceImpl implements BasketService {

    private BasketRepository basketRepository;

    public BasketServiceImpl(BasketRepository basketRepository) {
        this.basketRepository = basketRepository;
    }

    @Override
    public Iterable<Basket> getAllBaskets() {
        return this.basketRepository.findAll();
    }

    @Override
    public Basket create(Basket basket) {

        System.out.println("The basket to save");
        System.out.println(basket.toString());

        basket.setDateCreated(LocalDate.now());

        return this.basketRepository.save(basket);
    }

    @Override
    public void update(Basket basket) {
        this.basketRepository.save(basket);
    }
}

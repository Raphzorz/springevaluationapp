package com.rs2evaluation.ecommerce.service;

import com.rs2evaluation.ecommerce.exception.ResourceNotFoundException;
import com.rs2evaluation.ecommerce.model.Product;
import com.rs2evaluation.ecommerce.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProduct(long id) {
        return productRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Iterable<Product> getProductByKeyword(String keyword, String category) {
        return productRepository.findByKeyword(keyword, category);
    }

    @Override
    public Iterable<Product> getProductByOnlyKeyword(String keyword) {
        return productRepository.findByOnlyKeyword(keyword);
    }
}

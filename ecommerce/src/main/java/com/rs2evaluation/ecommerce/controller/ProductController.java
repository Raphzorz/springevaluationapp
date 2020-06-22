package com.rs2evaluation.ecommerce.controller;

import com.rs2evaluation.ecommerce.model.Product;
import com.rs2evaluation.ecommerce.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    //    Loads the product list as the webapp is opened
    @GetMapping(value = {"", "/"})
    public @NotNull Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }

    //    The product search
    @RequestMapping("/filter-products")
    public Iterable<Product> filterProducts(String keyword, String category) {
        System.out.println(category.toUpperCase());
        if (category.toUpperCase().equals("ALL")) {
            return productService.getProductByOnlyKeyword(keyword.toUpperCase());
        } else if (keyword != null)
//            Changing to uppercase to match different cases
            return productService.getProductByKeyword(keyword.toUpperCase(), category.toUpperCase());

        else {
            return productService.getAllProducts();
        }
    }
}

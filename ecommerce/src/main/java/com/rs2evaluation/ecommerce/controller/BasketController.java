package com.rs2evaluation.ecommerce.controller;

import com.rs2evaluation.ecommerce.dto.BasketProductUserDto;
import com.rs2evaluation.ecommerce.exception.ResourceNotFoundException;
import com.rs2evaluation.ecommerce.model.Basket;
import com.rs2evaluation.ecommerce.model.BasketProduct;
import com.rs2evaluation.ecommerce.model.BasketStatus;
import com.rs2evaluation.ecommerce.model.Product;
import com.rs2evaluation.ecommerce.service.BasketProductService;
import com.rs2evaluation.ecommerce.service.BasketService;
import com.rs2evaluation.ecommerce.service.ProductService;
import com.rs2evaluation.ecommerce.service.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/baskets")
public class BasketController {

    ProductService productService;
    BasketService basketService;
    BasketProductService basketProductService;
    UserService userService;

    public BasketController(ProductService productService, BasketService basketService,
                            BasketProductService basketProductService, UserService userService) {
        this.productService = productService;
        this.basketService = basketService;
        this.basketProductService = basketProductService;
        this.userService = userService;
    }

    // This method checks whether the user has already bought the products
    //        Return the list of the products the user has already bought
    @PostMapping("/check")
    public Iterable<Product> checkForPreviousPurchases(@RequestBody BasketForm form) {

        System.out.println(form);
        List<BasketProductUserDto> formDtos = form.getProductBaskets();
        System.out.println(form.getProductBaskets());
        validateProductsExistence(formDtos);
        List<Long> listOfProductsAlreadyPurchased = searchThroughHistory(formDtos);
        List<Product> listToReturn = new ArrayList<>();
        for (Long product : listOfProductsAlreadyPurchased) {
            listToReturn.add(productService.getProduct(product));
        }

        System.out.println("You have already bought");
        System.out.println(listToReturn.toString());
        return listToReturn;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public @NotNull Iterable<Basket> list() {
        return this.basketService.getAllBaskets();
    }


    //    this method is used to check whether any previous purchases occured
    private List<Long> searchThroughHistory(List<BasketProductUserDto> formDtos) {
//        List of products that have already been bought by the user
        List<Long> productsAlreadyBoughtList = new ArrayList<>();
//        List of products to be purchased
        List<Long> purchasedProductsList;
//        Products that had already been purchased
        List<Long> productsToPurchaseList = new ArrayList<>();
//        User Id of the person making the purchase
        long userIdOfPurchasingUser = formDtos.get(0).getUser().getId();
        System.out.println("Check this");
        System.out.println(userService.checkForExistence(userIdOfPurchasingUser));
//        Checking whether the user has made any purchases in the past
        if (userService.checkForExistence(userIdOfPurchasingUser) != 0) {
            purchasedProductsList = userService.checkForPastPurchaseIdNotNull(userIdOfPurchasingUser);
            for (BasketProductUserDto dto : formDtos) {
                productsToPurchaseList.add(dto.getProduct().getId());
            }
            for (long product : productsToPurchaseList) {
                if (purchasedProductsList.contains(product))
                    productsAlreadyBoughtList.add(purchasedProductsList.get(purchasedProductsList.indexOf(product)));
            }
            System.out.println(productsAlreadyBoughtList);
        }
        return productsAlreadyBoughtList;
    }


    //    This passed form contains all of the product details - IMPORTANT
    //    This is the actual update method that saves the order to the DB
    @PostMapping
    public ResponseEntity<Basket> create(@RequestBody BasketForm form) {
        List<BasketProductUserDto> formDtos = form.getProductBaskets();
        validateProductsExistence(formDtos);

        Basket basket = new Basket();

        basket.setStatus(BasketStatus.PAID.name());
        basket = this.basketService.create(basket);

        System.out.println(basket.getBasketProducts());
        List<BasketProduct> basketProducts = new ArrayList<>();
        for (BasketProductUserDto dto : formDtos) {
            basketProducts.add(basketProductService.create(new BasketProduct(basket, productService.getProduct(dto
                    .getProduct()
                    .getId()), dto.getUser())));
        }

        basket.setBasketProducts(basketProducts);

        this.basketService.update(basket);

        String uri = ServletUriComponentsBuilder
                .fromCurrentServletMapping()
                .path("/baskets/{id}")
                .buildAndExpand(basket.getId())
                .toString();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", uri);
        return new ResponseEntity<>(basket, headers, HttpStatus.CREATED);
    }


    //    Check that the product actually exists
    private void validateProductsExistence(List<BasketProductUserDto> basketProducts) {
        List<BasketProductUserDto> list = basketProducts
                .stream()
                .filter(op -> Objects.isNull(productService.getProduct(op
                        .getProduct()
                        .getId())))
                .collect(Collectors.toList());
        if (!CollectionUtils.isEmpty(list)) {
            new ResourceNotFoundException("Product not found");
        }
    }


    //    This allows for a dto to be made, thus reducing the number of necessary queries
    public static class BasketForm {

        private List<BasketProductUserDto> productBaskets;

        public List<BasketProductUserDto> getProductBaskets() {
            return productBaskets;
        }

        public void setProductBaskets(List<BasketProductUserDto> productBaskets) {
            this.productBaskets = productBaskets;
        }
    }
}

package com.rs2evaluation.ecommerce.repository;


import com.rs2evaluation.ecommerce.model.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {

    //    Note: Using UPPER to ignore case in search
    //    Custom query to allow for the "like" search
    @Query(value = "select * from PRODUCT p where UPPER(p.PRODUCT_NAME) like %:keyword%",
            nativeQuery = true)
    List<Product> findByOnlyKeyword(@Param("keyword") String keyword);

    @Query(value = "select * from PRODUCT p where UPPER(p.product_name) like %:keyword% and UPPER(p.product_type) = :category",
            nativeQuery = true)
    List<Product> findByKeyword(@Param("keyword") String keyword, @Param("category") String category);

}

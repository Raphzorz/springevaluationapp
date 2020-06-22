package com.rs2evaluation.ecommerce.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

// Product table

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull(message = "Product Name is required")
    @Basic(optional = false)
    @Column(name = "PRODUCT_NAME", columnDefinition = "VARCHAR2(32)")
    private String productName;
    @Column(name = "PRODUCT_TYPE", columnDefinition = "VARCHAR2(8)")
    private String productType;

    protected Product() {
    }

    public Product(String productName, String productType) {
        this.productName = productName;
        this.productType = productType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", productType='" + productType + '\'' +
                '}';
    }
}

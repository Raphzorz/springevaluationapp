package com.rs2evaluation.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.validation.Valid;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

//The Basket entity which keeps track of whether the purchase was paid for (virtually-not really)

@Entity
@Table(name = "Basket")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "basketProducts")
public class Basket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dateCreated;

    private String status;

    @OneToMany(mappedBy = "pk.basket")
    @Valid
    private List<BasketProduct> basketProducts = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<BasketProduct> getBasketProducts() {
        return basketProducts;
    }

    public void setBasketProducts(List<BasketProduct> basketProducts) {
        this.basketProducts = basketProducts;
    }

    @Transient
    public int getNumberOfProducts() {
        return this.basketProducts.size();
    }

    @Override
    public String toString() {
        return "Basket{" +
                "id=" + id +
                ", dateCreated=" + dateCreated +
                ", status='" + status + '\'' +
                ", basketProducts=" + basketProducts +
                '}';
    }
}

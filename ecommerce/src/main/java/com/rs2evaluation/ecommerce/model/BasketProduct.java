package com.rs2evaluation.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Transient;

//Linking table, the basketId, productId and userId make up a composite PK.

@Entity
public class BasketProduct {

    @EmbeddedId
    @JsonIgnore
    private BasketProductUserPK pk;


    public BasketProduct() {
        super();
    }

    public BasketProduct(Basket basket, Product product, User user) {
        pk = new BasketProductUserPK();
        pk.setBasket(basket);
        pk.setProduct(product);
        pk.setUser(user);
    }

    @Transient
    public Product getProduct() {
        return this.pk.getProduct();
    }

    public BasketProductUserPK getPk() {
        return pk;
    }

    public void setPk(BasketProductUserPK pk) {
        this.pk = pk;
    }

    public User getUser() {
        return this.pk.getUser();
    }


    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((pk == null) ? 0 : pk.hashCode());

        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        BasketProduct other = (BasketProduct) obj;
        if (pk == null) {
            return other.pk == null;
        } else return pk.equals(other.pk);
    }
}

package com.rs2evaluation.ecommerce.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

//User table

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull(message = "User Name is required")
    @Basic(optional = false)
    @Column(name = "USER_NAME", columnDefinition = "VARCHAR2(40)")
    private String userName;

    public User(String userName) {
        this.userName = userName;
    }

    //    This is the default constructor that is not used directly
    protected User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                '}';
    }
}
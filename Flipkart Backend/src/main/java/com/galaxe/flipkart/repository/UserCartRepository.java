package com.galaxe.flipkart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.galaxe.flipkart.entities.UserCart;
@Repository
public interface UserCartRepository extends JpaRepository<UserCart, Integer> {

}

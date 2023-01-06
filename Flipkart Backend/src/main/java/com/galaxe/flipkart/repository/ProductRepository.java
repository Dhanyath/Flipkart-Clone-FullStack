package com.galaxe.flipkart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.galaxe.flipkart.entities.ProductDetails;

/**
 * 
 * @author dpulapakura
 *
 */
@Repository
public interface ProductRepository extends JpaRepository<ProductDetails, Integer>{
	/**
	 * Used to find the list of products by catageory
	 * @param catageory
	 * @return List of products 
	 */
	public List<ProductDetails> findByCatageory(String catageory);
}

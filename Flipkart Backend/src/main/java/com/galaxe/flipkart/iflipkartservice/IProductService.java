package com.galaxe.flipkart.iflipkartservice;

import java.util.List;

import com.galaxe.flipkart.entities.ProductDetails;

public interface IProductService {
	/*
	 * Used to add a new product
	 */
	public String addingNewProduct(ProductDetails product);
	/*
	 * Used to find all available products
	 */
	public List<ProductDetails> getAllProducts();
	/*
	 * Used to find the list of products by catageory
	 */
	public List<ProductDetails> findProductsByCatageory(String catageory);
	/*
	 * Used to find the list of products in sorting order by catageory
	 */
	public List<ProductDetails> getAllProductsOnSort(String catageory,String sortBy);
	
}

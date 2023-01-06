package com.galaxe.flipkart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.galaxe.flipkart.entities.ProductDetails;
import com.galaxe.flipkart.exceptions.EmptyProductListException;
import com.galaxe.flipkart.iflipkartservice.IProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {

	@Autowired(required = false)
	IProductService productService;

	/**
	 * Used to get all the products
	 * 
	 * @return list of product items
	 * @throws EmptyProductListException
	 */
	@GetMapping("/get/all/products")
	public ResponseEntity<List<ProductDetails>> getallProducts() {
		return new ResponseEntity<List<ProductDetails>>(productService.getAllProducts(), HttpStatus.OK);
	}

	/**
	 * Used to add new product into product list
	 * 
	 * @param productDetails-describes product details
	 * @return success when a product successfully added
	 */
	@PostMapping("/add/new/item")
	public ResponseEntity<String> addNewProduct(@RequestBody ProductDetails productDetails) {
		return new ResponseEntity<String>(productService.addingNewProduct(productDetails), HttpStatus.OK);
	}

	/**
	 * Used to find the products of particular catageory
	 * 
	 * @param catageory-catageory of a product to find
	 * @return list of products
	 */
	@GetMapping("/find/all/{catageory}")
	public List<ProductDetails> getallbycatageory(@PathVariable("catageory") String catageory) {

		return productService.findProductsByCatageory(catageory);

	}

	/**
	 * Used to find the selected catageory product list in sorting
	 * order(low-to-high,high-to-low)
	 * 
	 * @param catageory-catageory of a product to find
	 * @param sorby-sorting       type to sort product list
	 * @return list of products
	 */
	@GetMapping("/sort/productsitems/{catageory}/{sortby}")
	public List<ProductDetails> sortTheProductList(@PathVariable("catageory") String catageory,
			@PathVariable("sortby") String sorby) {
		return productService.getAllProductsOnSort(catageory, sorby);
	}

}

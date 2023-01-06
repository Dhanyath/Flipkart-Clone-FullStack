package com.galaxe.flipkart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.galaxe.flipkart.iflipkartservice.IUserCartService;

@RestController
@CrossOrigin
@RequestMapping("/cart")
public class UserCartController {
	@Autowired
	IUserCartService cartService;

	/**
	 * Used to add a product to cart
	 * 
	 * @param productId
	 * @param number
	 * @param quantity
	 * @return
	 */
	@GetMapping("/add/cart/{productId}/{userNumber}/{quantity}")
	public String addToCart(@PathVariable("productId") int productId, @PathVariable("userNumber") String number,
			@PathVariable("quantity") int quantity) {
		return cartService.addUserCart(productId, number, quantity);
	}

}

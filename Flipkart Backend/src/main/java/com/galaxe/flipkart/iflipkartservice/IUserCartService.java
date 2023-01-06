package com.galaxe.flipkart.iflipkartservice;

public interface IUserCartService {
	
	/*
	 * Used to add user carts
	 */
	public String addUserCart(int productId,String PhoneNumber,int selectedQuantity);

}

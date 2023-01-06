package com.galaxe.flipkart.iflipkartservice;

import java.util.List;

import com.galaxe.flipkart.dto.UserLoginDetails;
import com.galaxe.flipkart.entities.UserCart;
import com.galaxe.flipkart.entities.UserDetails;

public interface IUserService {

	/*
	 * Used to add new user
	 */
	public String addNewUser(UserDetails userDetail);

	/*
	 * Used to check login Credentials
	 */
	public boolean userLoginCheck(UserLoginDetails userlogindetails);

	/*
	 * Used to get all users
	 */
	public List<UserDetails> getAllusers();

	/*
	 * Used to update existing user
	 */
	public UserDetails updateUser(UserDetails user);

	/*
	 * Used to find user details by phonenumbers
	 */
	public UserDetails findByPhoneNumber(String phoneNumber);

	/*
	 * Used to get all details of user
	 */

	public UserDetails getAllUserCart(String phoneNumber);

}

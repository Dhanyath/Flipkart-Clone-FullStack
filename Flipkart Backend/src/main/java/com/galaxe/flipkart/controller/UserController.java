package com.galaxe.flipkart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.galaxe.flipkart.dto.UserLoginDetails;
import com.galaxe.flipkart.entities.UserDetails;
import com.galaxe.flipkart.exceptions.IncorrectPasswordException;
import com.galaxe.flipkart.exceptions.NoAccountFoundException;
import com.galaxe.flipkart.exceptions.UserAlreadyExistsException;
import com.galaxe.flipkart.iflipkartservice.IUserService;

@RestController
@CrossOrigin
public class UserController {
	@Autowired
	IUserService userService;

	/**
	 * Used to add a new user
	 * 
	 * @param userDetails-all details of a user
	 * @return success if a user added successfully
	 * @throws UserAlreadyExistsException
	 */
	@PostMapping("/addNewUser")
	public ResponseEntity<String> addANewUser(@RequestBody UserDetails userDetails){
		return new ResponseEntity<String>(userService.addNewUser(userDetails), HttpStatus.OK);
	}

	/**
	 * Used to check login credentials
	 * 
	 * @param userlogindetails-login details given by user
	 * @return true if user uses correct login credentials
	 * @throws NoAccountFoundException
	 * @throws IncorrectPasswordException
	 */
	@PostMapping("/user/login")
	public ResponseEntity<Boolean> checkForLogin(@RequestBody UserLoginDetails userlogindetails) {
		return new ResponseEntity<Boolean>(userService.userLoginCheck(userlogindetails), HttpStatus.OK);
	}

	/**
	 * Used to get all users
	 * 
	 * @return List of all users
	 */
	@GetMapping("/all/users")
	public List<UserDetails> getallUsers() {
		return userService.getAllusers();
	}

	/**
	 * Used to update already existing user
	 * 
	 * @param user
	 * @return Success message if details updates successfully
	 */
	@PutMapping("/update/user")
	public UserDetails updateUser(@RequestBody UserDetails user) {
		return userService.updateUser(user);
	}

	/**
	 * Used to find the cart details of particular user using phonenumber
	 * 
	 * @param phoneNumber
	 * @return
	 */
	@GetMapping("/all/cart/details/{phoneNumber}")
	public UserDetails getDetails(@PathVariable("phoneNumber") String phoneNumber) {
		return userService.getAllUserCart(phoneNumber);
	}
}

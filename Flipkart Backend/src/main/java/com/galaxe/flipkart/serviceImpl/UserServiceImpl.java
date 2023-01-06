package com.galaxe.flipkart.serviceImpl;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galaxe.flipkart.dto.UserLoginDetails;
import com.galaxe.flipkart.entities.UserDetails;
import com.galaxe.flipkart.exceptions.EmptyCartException;
import com.galaxe.flipkart.exceptions.IncorrectPasswordException;
import com.galaxe.flipkart.exceptions.NoAccountFoundException;
import com.galaxe.flipkart.exceptions.UserAlreadyExistsException;
import com.galaxe.flipkart.iflipkartservice.IUserService;
import com.galaxe.flipkart.repository.ProductRepository;
import com.galaxe.flipkart.repository.UserCartRepository;
import com.galaxe.flipkart.repository.UserRepository;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	UserCartRepository userCartRepository;
	static final Logger log = LogManager.getLogger(UserServiceImpl.class);

	/**
	 * Used to add new user
	 */
	@Override
	public String addNewUser(UserDetails userDetail) {
		System.out.println(userRepository.existsByPhoneNumber(userDetail.getPhoneNumber()));
		if (userRepository.existsByPhoneNumber(userDetail.getPhoneNumber())) {
			log.error("User Already Exists");
			throw new UserAlreadyExistsException("You have already an account! Please login to continue");

		}
		log.info("Account Created Successfully");
		userDetail.setAccountStatus(true);
		userRepository.save(userDetail);
		return "Account Created Successfully";
	}

	/**
	 * Used to check the login details
	 */
	@Override
	public boolean userLoginCheck(UserLoginDetails userlogindetails) {
		UserDetails user = userRepository.findByPhoneNumber(userlogindetails.getPhoneNumber());
		if (user == null) {
			log.error("Account Not Found");
			throw new NoAccountFoundException("Oops!You don't have an acoount...");
		} else if (!user.getPassword().equals(userlogindetails.getPassword())) {
			log.error("Incorrect Password");
			throw new IncorrectPasswordException("Incorrect password!");
		}
		return true;
	}

	/**
	 * Used to find all available users
	 */
	@Override
	public List<UserDetails> getAllusers() {

		return userRepository.findAll();
	}

	/**
	 * Used to update existing user details
	 */
	@Override
	public UserDetails updateUser(UserDetails user) {
		System.out.println(user);
		return null;
	}

	/**
	 * Used to find User details by phone numbers
	 */
	@Override
	public UserDetails findByPhoneNumber(String phoneNumber) {

		return userRepository.findByPhoneNumber(phoneNumber);
	}

	/**
	 * Used to get all udetails for user
	 */
	@Override
	public UserDetails getAllUserCart(String phoneNumber) {
		if (userRepository.findByPhoneNumber(phoneNumber).getCart()==null) {
			throw new EmptyCartException("User Cart is empty");
		}
		return userRepository.findByPhoneNumber(phoneNumber);
	}
}

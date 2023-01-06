package com.galaxe.flipkart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.galaxe.flipkart.entities.UserDetails;

@Repository
public interface UserRepository extends JpaRepository<UserDetails, Integer>{
	
	
	/**
	 * Used to check wheather a user is exists or not using phonenumber
	 * @param phoneNumber
	 * @return true if already exists
	 */
	public boolean existsByPhoneNumber(String phoneNumber);
	/**
	 * Used to find user details by phonenumber
	 * @param phoneNumber
	 * @return
	 */
	public UserDetails findByPhoneNumber(String phoneNumber);
}

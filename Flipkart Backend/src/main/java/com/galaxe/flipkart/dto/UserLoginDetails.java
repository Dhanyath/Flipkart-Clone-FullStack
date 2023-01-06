package com.galaxe.flipkart.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
/**
 * Used to refer user entered details for login
 * @author dpulapakura
 *
 */
public class UserLoginDetails {
	//PhoneNumber Entered by user
	private String phoneNumber;
	//Password Entered by user
	private String password;

}

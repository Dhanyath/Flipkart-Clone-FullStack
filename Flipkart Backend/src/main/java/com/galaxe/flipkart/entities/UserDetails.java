package com.galaxe.flipkart.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="user_details")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	//First Name Of The User
	private String firstName;
	//Last Name Of The User
	private String lastName;
	//PhoneNumber Of the User
	private String phoneNumber;
	@Enumerated(EnumType.STRING)
	private Gender gender;
	//Password Of The User
	private String password;
	//Defines the Status Of the Account Holder
	private boolean accountStatus;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(referencedColumnName = "userId")
	private List<UserCart> cart;
	

}

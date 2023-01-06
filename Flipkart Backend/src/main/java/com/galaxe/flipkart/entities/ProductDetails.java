
package com.galaxe.flipkart.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="product_details")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ProductDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	//Name Of the product
	private String name;
	//Model Name Of the product
	private String model;
	//Color of the product
	private String color;
	//Description Of the product
	private String specification;
	//Rating of the product
	private int ratings;
	//Reviews of the product
	private int reviews;
	//Price of the product
	private double actualPrice;
	//Offer Price Of the product
	private double offerPrice;
	//Whether the product is available or not
	private boolean isActive;
	//Category of the Product
	private String catageory;
	//Image Link Of the Product
	private String imageUrl;
	//Total Quantity available in the stock
	private int quantityAvailable;
	@Column
    @ElementCollection(targetClass=String.class)
    private List<String> features;
	
}

package com.galaxe.flipkart.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galaxe.flipkart.entities.ProductDetails;
import com.galaxe.flipkart.entities.UserCart;
import com.galaxe.flipkart.entities.UserDetails;
import com.galaxe.flipkart.iflipkartservice.IProductService;
import com.galaxe.flipkart.iflipkartservice.IUserCartService;
import com.galaxe.flipkart.iflipkartservice.IUserService;
import com.galaxe.flipkart.repository.UserRepository;

@Service
public class UserCartServiceImpl implements IUserCartService {
	@Autowired
	IProductService productService;
	@Autowired
	IUserService userService;
	@Autowired
	UserRepository repository;

	@Override
	public String addUserCart(int productId, String phoneNumber, int selectedQuantity) {
		UserDetails user = userService.findByPhoneNumber(phoneNumber);
		List<ProductDetails> products = productService.getAllProducts();
		List<UserCart> existingCart = new ArrayList<>();
		List<UserDetails> userDe = userService.getAllusers();
		List<UserCart> cartDetails = new ArrayList<>();
		UserCart cart = new UserCart();
		boolean flag = false;
		for (ProductDetails product : products) {
			if (product.getProductId() == productId) {
				cart.setActive(true);
				cart.setActualPrice(product.getActualPrice());
				cart.setCatageory(product.getCatageory());
				cart.setColor(product.getColor());
				cart.setImageUrl(product.getImageUrl());
				cart.setModel(product.getModel());
				cart.setName(product.getName());
				cart.setOfferPrice(product.getOfferPrice());
				cart.setQuantityAvailable(product.getQuantityAvailable());
				cart.setQuantitySelected(selectedQuantity);
				cart.setRatings(product.getRatings());
				cart.setReviews(product.getReviews());
				cart.setSpecification(product.getSpecification());
				break;
			}
		}
		if (user.getCart().isEmpty()) {
			cartDetails.add(cart);
			user.setCart(cartDetails);
			repository.save(user);
		} else {
			for (UserDetails details : userDe) {
				if (phoneNumber.equals(details.getPhoneNumber())) {
					existingCart = details.getCart();
					for (UserCart c : existingCart) {
						if (c.getProductId() == productId) {
							c.setQuantitySelected(c.getQuantitySelected() + 1);
							flag = true;
						}
					}
				}
				if (flag == true) {
					cartDetails.addAll(details.getCart());
					user.setCart(cartDetails);
					repository.save(user);
				} else {
					cartDetails.addAll(details.getCart());
					cartDetails.add(cart);
					user.setCart(cartDetails);
					repository.save(user);
				}
				break;
			}
		}

		return "Cart Added Successfully";
	}

}

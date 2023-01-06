package com.galaxe.flipkart.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galaxe.flipkart.entities.ProductDetails;
import com.galaxe.flipkart.exceptions.EmptyProductListException;
import com.galaxe.flipkart.exceptions.NegativePriceException;
import com.galaxe.flipkart.iflipkartservice.IProductService;
import com.galaxe.flipkart.repository.ProductRepository;
import com.galaxe.flipkart.repository.UserCartRepository;
import com.galaxe.flipkart.repository.UserRepository;

@Service
public class ProductServiceImpl implements IProductService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	UserCartRepository userCartRepository;

	/**
	 * Used to add new product
	 */
	@Override
	public String addingNewProduct(ProductDetails product) {
		if (productRepository.existsById(product.getProductId())) {
			return "Product already exists";
		} 
		else if(product.getActualPrice()<=0) {
			throw new NegativePriceException("Price Can't be negative");
		}
		else {
			productRepository.save(product);
		}
		return "Product Added Successfully!!!!";
	}

	/**
	 * Used to get all available products
	 */
	@Override
	public List<ProductDetails> getAllProducts() {
		if (productRepository.findAll().isEmpty()) {
			throw new EmptyProductListException("No Products available");
		}
		List<ProductDetails> allItems=productRepository.findAll();
		List<ProductDetails> allActiveItems=new ArrayList<>();
		for(ProductDetails p:allItems) {
			if(p.isActive()) {
				allActiveItems.add(p);
			}
		}
		return allActiveItems;
	}

	/**
	 * Used to find the list of products by catageory
	 */
	@Override
	public List<ProductDetails> findProductsByCatageory(String catageory) {
		if (productRepository.findByCatageory(catageory).isEmpty()) {
			throw new EmptyProductListException("No Products Available");
		}
		return productRepository.findByCatageory(catageory);
	}

	/**
	 * Used to find the list of products in sorting order by catageory
	 */
	@Override
	public List<ProductDetails> getAllProductsOnSort(String catageory, String sortBy) {
		List<ProductDetails> allProducts = new ArrayList<>();
		allProducts.addAll(productRepository.findByCatageory(catageory));
		if (allProducts.isEmpty()) {
			throw new EmptyProductListException("No Products Available");
		}
		if (sortBy.toLowerCase().equals("lowtohigh")) {
			allProducts.sort((ProductDetails p1,
					ProductDetails p2) -> ((int) (p1.getOfferPrice() - (int) (p2.getOfferPrice()))));
		} else if (sortBy.toLowerCase().equals("hightolow")) {
			allProducts.sort((ProductDetails p1,
					ProductDetails p2) -> ((int) (p2.getOfferPrice() - (int) (p1.getOfferPrice()))));
		}
		return allProducts;
	}

}

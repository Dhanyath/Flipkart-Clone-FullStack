package com.galaxe.flipkart;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FlipkartApplication {

	static Logger log=LogManager.getLogger(FlipkartApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(FlipkartApplication.class, args);
//		log.info("Apllication Started Successfully");
	}

}

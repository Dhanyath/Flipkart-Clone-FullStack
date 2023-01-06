package com.galaxe.flipkart.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class MyExceptionHandler {

	/**
	 * Invokes when user not found
	 * @param exception
	 * @return A message with error code
	 */
	@ExceptionHandler(UserAlreadyExistsException.class)
	public ResponseEntity<ErrorMessage> getExceptionData(UserAlreadyExistsException exception){
		ErrorMessage errormessage=new ErrorMessage(404,exception.getMessage());
		return new ResponseEntity<>(errormessage,HttpStatus.NOT_FOUND);
	}
	/**
	 * Invokes when no account found 
	 * @param exception
	 * @return A message with error code
	 */
	@ExceptionHandler(NoAccountFoundException.class)
	public ResponseEntity<ErrorMessage> getExceptionData(NoAccountFoundException exception){
		ErrorMessage errormessage=new ErrorMessage(404,exception.getMessage());
		return new ResponseEntity<>(errormessage,HttpStatus.NOT_FOUND);
	}
	/**
	 * Invokes when user enters incorrect password 
	 * @param exception
	 * @return A message with error code
	 */
	@ExceptionHandler(IncorrectPasswordException.class)
	public ResponseEntity<ErrorMessage> getExceptionData(IncorrectPasswordException exception){
		ErrorMessage errormessage=new ErrorMessage(404,exception.getMessage());
		return new ResponseEntity<>(errormessage,HttpStatus.NOT_FOUND);
	}
	/**
	 * Invokes when Product List is empty
	 * @param exception
	 * @return A message with error code
	 */
	@ExceptionHandler(EmptyProductListException.class)
	public ResponseEntity<ErrorMessage> getExceptionData(EmptyProductListException exception){
		ErrorMessage errormessage=new ErrorMessage(404,exception.getMessage());
		return new ResponseEntity<>(errormessage,HttpStatus.NOT_FOUND);
	}

	/**
	 * Invokes when Product is negattive
	 * @param exception
	 * @return
	 */
	@ExceptionHandler(NegativePriceException.class)
	public ResponseEntity<ErrorMessage> getExceptionData(NegativePriceException exception){
		ErrorMessage errormessage=new ErrorMessage(404,exception.getMessage());
		return new ResponseEntity<>(errormessage,HttpStatus.NOT_FOUND);
	}
	/**
	 * Invokes when Cart is empty
	 * @param exception
	 * @return
	 */
//	@ExceptionHandler(EmptyCartException.class)
//	public ResponseEntity<ErrorMessage> getExceptionData(EmptyCartException exception){
//		ErrorMessage errormessage=new ErrorMessage(404,exception.getMessage());
//		return new ResponseEntity<>(errormessage,HttpStatus.NOT_FOUND);
//	}
}

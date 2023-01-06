package com.galaxe.flipkart.exceptions;

/*
 * Error message class[contains errore code,Error message]
 */
public class ErrorMessage {
	
	//Error Code for an Exception
	private int errorCode;
	//Error Message for an Exception
	private String message;
	public ErrorMessage(int errorCode, String message) {
		super();
		this.errorCode = errorCode;
		this.message = message;
	}
	public ErrorMessage() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}

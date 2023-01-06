package com.galaxe.flipkart.exceptions;

/*
 * Incorrect Password Exception
 */
public class IncorrectPasswordException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public IncorrectPasswordException() {
		// TODO Auto-generated constructor stub
	}

	public IncorrectPasswordException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public IncorrectPasswordException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

	public IncorrectPasswordException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public IncorrectPasswordException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

}

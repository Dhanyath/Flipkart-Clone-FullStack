package com.galaxe.flipkart.exceptions;

/**
 * Empty Cart Exception
 * @author dpulapakura
 *
 */
public class EmptyCartException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public EmptyCartException() {
		// TODO Auto-generated constructor stub
	}

	public EmptyCartException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public EmptyCartException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

	public EmptyCartException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public EmptyCartException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

}

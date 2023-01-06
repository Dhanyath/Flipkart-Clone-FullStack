package com.galaxe.flipkart.exceptions;

/**
 * Negative Price Exceptipon
 * @author dpulapakura
 *
 */
public class NegativePriceException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NegativePriceException() {
		// TODO Auto-generated constructor stub
	}

	public NegativePriceException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public NegativePriceException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

	public NegativePriceException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public NegativePriceException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

}

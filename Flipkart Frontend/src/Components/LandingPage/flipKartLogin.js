
import React from "react";
import './flipkartlogin.css';
const FlipKartLogin=()=> {
  return (
    <div>
    <div  className='login-main'>
      <h5>hello</h5>
    </div>
    
    <div className="authContainer">
            <div className="row">
               
              <div className="leftspace">
                <h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
              </div>
              
              
              <div className="rightspace">
                <div className="loginInputContainer">
                  {/* {auth.error && (
                    <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                  )} */}
                    <input
                    className="login-inputfields"
                      type="text"
                      label="First Name"
                       
                    />
                   </div>
                  {/* <input
                  className="login-inputfields"
                    type="password"
                    label="Password"
                    //  rightElement={<a href="#">Forgot?</a>}
                  />
                  <input className="loginButton"
                    // title={signup ? "Register" : "Login"}
                    value="Login"
                    bgColor="#fb641b"
                    textColor="#ffffff"
                    style={{
                      margin: "40px 0 20px 0",
                    }}
                    // onClick={userLogin}
                  />
                  
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" label='Enter Email/Mobile number'/>
                    
                */}
                  {/* <p style={{ textAlign: "center" }}>OR</p> */}
                  {/* <button
                    title="Request OTP"
                    bgColor="#ffffff"
                    textColor="#2874f0"
                    style={{
                      margin: "20px 0",
                    }}
                  /> */}
                </div>
              </div>
            </div>
        </div>
 
    
  );
};
export default FlipKartLogin;
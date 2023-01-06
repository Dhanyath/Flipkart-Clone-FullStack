import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button,Link, makeStyles, Toolbar, Typography, withStyles,Badge } from '@material-ui/core';
import Search from './Search';
import { ShoppingCart } from '@material-ui/icons';
import "./Loginform.css"
import axios from 'axios';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyle = makeStyles(theme => ({
    header: {
        background: '#2874f0',
        height: 55
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    logo: {
        width: 75
    },
    container: {
        display: 'flex',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    },
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
               
        },
        
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        textDecoration:'none'
    }
}));

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    const [otpDisplayProperty,setOtpDisplayProperty]=useState("")
    const [signupDisplayProperty,setSignupDisplayProperty]=useState("")
    const [loginError,setLoginError]=useState("")
    const [loginStatus,setLoginStatus]=useState(false);
    const [badgeNumber,setBadgeNumber]=useState(0)
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [loginDetails,setLoginDetails]=useState({
        phoneNumber:'',
        password:''
    })

    useEffect(()=>{
        if(localStorage.getItem("loginstatus")){
            setLoginStatus(localStorage.getItem("loginstatus"))
        }
    },[])
   
    useEffect(()=>{
        if(!loginStatus){
            setBadgeNumber(0);
        }
        else{
            axios.get(`http://localhost:2122/all/cart/details/${9652712157}`).then((response)=>setBadgeNumber(response.data.cart.length))
        }

       
      

    },[loginStatus])
  
  
    const changeHandler= (e)=>{
       setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
     
    }
    console.log(loginDetails)
    const getLogIn=async()=>{
        if(loginDetails.phoneNumber==""){
           
        }
        else if(loginDetails.password==""){

        }
        else{
          await  axios.post(`http://localhost:2122/user/login`,loginDetails).then((response)=>{if(response.data){
            toast.success("You're logged in successfully", {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
              });

            setLoginStatus(true)
            document.getElementById("flipkart-practice").style.display="none";
            localStorage.setItem("loginstatus",true);
            localStorage.setItem("phonenumber",loginDetails.phoneNumber);
        }})
        .catch((error)=>setLoginError(error.response.data.message))
            console.log(loginStatus )
        }
      
    };
    const popupChanges=()=>{
        console.log(otpDisplayProperty)
        console.log(signupDisplayProperty)
        document.getElementById("flipkart-login-left-part").style.display="none";
        document.getElementById("flipkart-login-left-part-signup").style.display="block";
        document.getElementById("flipkart-login-form").style.display="none";
        document.getElementById("flipkart-login-form1-signup").style.display="block";
    }
  
    const otpPopChanges=()=>{
        setSignupDisplayProperty("none")
        setOtpDisplayProperty("block")
        
        document.getElementById("flipkart-login-form").style.display="none";
        console.log(otpDisplayProperty)
        console.log(signupDisplayProperty)
    }
    const loginPopUpChanges=()=>{
        setSignupDisplayProperty("")
        setOtpDisplayProperty("none")
        document.getElementById("flipkart-login-form").style.display="block";
        document.getElementById("flipkart-login-left-part").style.display="block";
        document.getElementById("flipkart-login-left-part-signup").style.display="none";
        console.log(otpDisplayProperty)
        console.log(signupDisplayProperty)
    }
    const loginPopUpChangesinOtPage=()=>{
        setSignupDisplayProperty("none");
        setOtpDisplayProperty("");
        document.getElementById("flipkart-login-form").style.display="block";
        document.getElementById("flipkart-login-left-part").style.display="block";
        document.getElementById("flipkart-login-left-part-signup").style.display="none";
        console.log(otpDisplayProperty)
        console.log(signupDisplayProperty)
    }
    const loginFormClose=()=>{
        setOtpDisplayProperty("");
        setSignupDisplayProperty("");
        document.getElementById("flipkart-login-form").style.display="block";
        document.getElementById("flipkart-login-left-part").style.display="block";
        document.getElementById("flipkart-login-left-part-signup").style.display="none";
        document.getElementById("flipkart-practice").style.display="none";
    }
    const loginChange=()=>{
    
        window.scroll(0, window.scrollY)
        document.getElementById("flipkart-practice").style.display="block"
    }
    const logOut=()=>{
        console.log("hello")
        localStorage.removeItem("loginstatus")
        window.location.reload()
    }
    return (
        <>
        <AppBar position="fixed" className={classes.header}>
            <ToolBar>
                <Link to='/' className={classes.component}>
                    <img src={logoURL} className={classes.logo} alt="" />
                    <span className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box component="span" style={{ color: '#FFE500' }}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subURL} alt="" />
                    </span>
                </Link>
                <Search />
                <div className={classes.wrapper}>
                   {loginStatus? 
                //   <div> <a style={{fontSize:"15px",fontWeight:"500",marginTop:"0.4rem",cursor:"pointer"}}>My Account</a>
                   <div class="dropdown">
                        <button class="dropbtn">My Account</button>
                        <div class="dropdown-content">
                            <a href="#">My Profile</a>
                            <a href="#">My Orders</a>
                            <a  onClick={logOut}>Log Out</a>
                        </div>
                     </div>
                   :<Link><Button className={classes.login} variant="contained" onClick={loginChange}>Login</Button>
                    </Link>}
                    <Link>
                        <Typography style={{ marginTop: 2 }}>More</Typography>
                    </Link>
                    <Link to='/' className={classes.container}>
                        <Badge badgeContent={badgeNumber} color="secondary">
                            <ShoppingCart />
                        </Badge>
                        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
                    </Link>
                </div>
            </ToolBar>
        </AppBar>

        <ToastContainer
              position="bottom-center"
              autoClose={25000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
        {/* Login PopUp */}
        <div className='flipkart-practice' id="flipkart-practice" >
        <div className="flipkart-login-formpopup" id="flipkart-login-formpopup" >
              <div className="filpkart-login-close-button"><button type="button" className="btn" onClick={loginFormClose}><span style={{fontSize:"30px",color:"white"}}>✕</span></button></div>
              
            <div className="view-cart-row">
                
            <div className="leftspace">
                  <div className="flipkart-login-left-part" id="flipkart-login-left-part"><h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
              </div>
              <div className="flipkart-login-left-part-signup" id="flipkart-login-left-part-signup"><h2 style={{fontSize:"25px",fontWeight:"600"}}>Looks like you're new here!</h2>
                <p>Sign up with your mobile number to get started</p>
              </div>
                </div>
             
              
              <div className="rightspace">
                <div className="loginInputContainer">
                  {/* {auth.error && (
                    <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                  )} */}
                  <br/><br/>
                  <div className="flipkart-login-form" id="flipkart-login-form">
                            <form >
                                    <small>Enter Mobile Number</small>
                                    <input
                                    className="login-inputfields"
                                    type="text"
                                    value={loginDetails.phoneNumber}
                                    name="phoneNumber"
                                    onChange={(e)=>changeHandler(e)}
                                    onKeyDown={()=>setLoginError("")} required
                                    ></input>
                                    <br></br>
                                   <small>Enter Password</small>
                                    <input
                                    className="login-inputfields"
                                    type="password"
                                    name="password"
                                    value={loginDetails.password}
                                    onChange={(e)=>changeHandler(e)}
                                    onKeyDown={()=>setLoginError("")}
                                    required />
    
                                    {loginError}
                                    <br></br>
                                    <p className="flipkart-tagline" style={{fontSize:12}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                <button type="button" className="flipkart-login-button" onClick={(e)=>getLogIn(e)}>Login</button>
                            </form>
                                
                                <p style={{marginLeft:"9.5rem",marginTop:"1rem",opacity:"50%"}}>OR</p>
                                <button type="button" className="flipkart-requestotp-button">Request OTP</button>
                                <div className="flipkart-new-user-tag"><p onClick={popupChanges}>New to Flipkart? Create an account</p></div>
                    
                     </div>
                     <div className="flipkart-login-form1-signup" id="flipkart-login-form1-signup" style={{display:signupDisplayProperty}}>
                            <form>
                                    <small>Enter Mobile Number</small>
                                    <input
                                    className="login-inputfields"
                                    type="text"
                                    required/>
                                   <br/><br/>
                                    {/* <p className="flipkart-tagline" style={{fontSize:12}}>OTP Sent</p> */}
                                <button type="button" className="flipkart-continue-button" onClick={otpPopChanges}>Continue</button>
                            </form>
                            <div><button type="button" className="flipkart-existing-user-button" ><span onClick={loginPopUpChangesinOtPage}>Existing User? Login</span></button>
                            <br></br>
                            </div>
                     </div>
                     <div className="flipkart-login-form2-otp-page"  id="flipkart-login-form2-otp-page" style={{display:otpDisplayProperty}}>
                            <form >
                            <small>Enter Mobile Number</small>
                                    <input
                                    className="login-inputfields"
                                    type="text"
                                    label="First Name"
                                     readOnly/>
                                   <br></br><br></br>
                                   <div className="flipkart-otp-sent-tagline">   
                                       <p  style={{fontSize:14}}>OTP Sent to Mobile<span style={{marginLeft:"9rem"}} ><a>Resend?</a></span></p>
                                </div>
                                <small>Enter OTP</small>
                                <input
                                    className="login-inputfields"
                                    type="text"
                                    label="Enter OTP"
                                    required   />
                                <br></br><br></br>
                                <small>Set Password</small>
                                <input
                                    className="login-inputfields"
                                    type="password"
                                    label="Set Password"
                                    required  />
                                 <br/><br/><br/>
                                   <button type="button" className="flipkart-signup-button" style={{fontSize:"16px"}}>SignUp</button>
                            </form>
                            <div><button type="button" className="flipkart-existing-user-button" ><span onClick={loginPopUpChanges}>Existing User? Login</span></button>
                            <br></br>
                            </div>
                     </div>
                     
                  </div>
              </div>
              
              </div>
            </div>
            
           
          </div>
        </>
    )
}

export default Header;
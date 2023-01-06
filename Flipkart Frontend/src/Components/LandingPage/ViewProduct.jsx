import { Button } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./ViewProduct.css";

const ViewProduct = props => {
    const navigate=useNavigate();
    const date = new Date(new Date().getTime()+(6*24*60*60*1000));
    const catageories=["Electronics","TVs & Appliances","Men","Women"," Baby & kids","Home & Furniture"," Sports, Books & More"];
    const location=useLocation();
    const product=location.state.selectedProduct;
    const [tempCart,setTempCart]=useState({})
    console.log(product)  
    const addToCart=(e)=>{
        console.log(product)
        const tem={};
        tem[product.productId]=1;
        console.log(tem)
        setTempCart(tem)
        console.log(tempCart)
        localStorage.setItem("cart",JSON.stringify(tem))
        navigate("/cart",{
            state: { selectedProduct: product },
          })
    }
    return (
        <>
    <div>  
    <div className='view-product-top-menu'>
       
       {catageories.map((item)=>(
           <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {item}
           </a>
         </li>
       ))}
    </div>  
    </div>
        <div className='view-product-container'>
            <div>
                    <div className='view-product-image-box'>
                        <div><img src={product.imageUrl}  alt="Product Image" style={{width:"23rem",height:"25rem",margin:"2rem"}} /><br /></div>
                    </div>
                    <div className='view-product-buttons'>
                            <ul type="none" style={{display:"flex"}}>
                                <li>
                            <button  className='view-product-add-to-cart' id={product.productId} onClick={(e)=>addToCart(e)}><span >ADD TO CART</span></button></li>
                                <li>
                            <button className='view-product-buy-now'>Buy Now</button></li>
                            </ul>
                    </div>
            </div>
            <div> 
            <div className='view-product-right-container'>
                <div className='view-product-right-part'>
                    <div className='view-product-right-part-heading'>
                        <h5><span>{product.name}</span></h5>
                    </div>
                    <br/>
                    <div className='view-product-right-part-rating'>
                        <span>{product.ratings} Ratings </span>
                        <span>&</span>
                        <span> {product.reviews} Reviews</span>
                    </div>
                    <div>
                        <span>Extra <span>{((product.actualPrice-product.offerPrice))}</span> off</span>
                      
                    </div>
                    <div><span style={{fontSize:"25px"}}>₹ {product.offerPrice}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span>₹<del>{product.actualPrice}</del></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"green",fontWeight:"500"}}>{((product.actualPrice-product.offerPrice)/product.actualPrice*100).toFixed(0)} %off</span>
                    </div>
                    <br>
                    </br>
                   <div>
                       <div className='view-item-available-offers'>
                           <div><h5>Available Offers</h5></div>
                         <ul type="none" style={{left:"0"}}>
                             <li>
                                  <span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{width:"20px"}}/></span>
                                  <span>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span>
                             </li>
                             <li>
                                  <span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{width:"20px"}}/></span>
                                  <span>Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</span>
                             </li>
                             <li>
                                  <span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{width:"20px"}}/></span>
                                  <span>Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</span>
                             </li>
                             <li>
                                  <span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{width:"20px"}}/></span>
                                  <span>Freebie OTTplay Premium: Get SonyLIV, Zee5 & more at Re 1</span>
                             </li>
                             <li>
                                  <span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{width:"20px"}}/></span>
                                  <span>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span>
                             </li>
                         </ul>
                       </div>
                       <div className='view-product-delivery'>
                           <table className='view-product-delivery-table'>
                               <tbody className='view-product-delivery-tbody'>
                               <tr>
                                   <td className='view-product-delivery-table-td1'>Delivery by </td>
                                   <td className='view-product-delivery-table-td2'>{date.toDateString()}</td>
                               </tr>
                               <tr>
                                   <td className='view-product-delivery-table-td1'>Warranty</td>
                                   <td className='view-product-delivery-table-td3'>No Warranty</td>
                               </tr>
                               <tr>
                                   <td className='view-product-delivery-table-td1' style={{verticalAlign:"baseline"}}>Seller</td>
                                   <td className='view-product-delivery-table-td4'>
                                       <p>SuperComNet</p>
                                       <p>GST Invoice Available</p>
                                       <p>View More Sellers</p>
                                       </td>
                               </tr>
                               </tbody>
                           </table>
                       </div>
                       
                   </div>
                    
                        

                </div>
            </div>
        </div>
           
        </div>

        </>
    );
};


export default ViewProduct;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ViewCart.css'
const ViewCart = props => {
   
    const [totalItems,setTotaItems]=useState(1);
    const [totalPrice,setTotalPirce]=useState(0);
    const [disCountPrice,setDisCountPrice]=useState(0);
    const [totalPayableAmount,setTotalPayableAmount]=useState(0);
    const location=useLocation();
    // const allProduct=[location.state.selectedProduct];
    const [allProduct,setAllProducts]=useState([])
    const[cartItems,setCartItems]=useState({});
    const [selectedProduct,setSelectedProduct]=useState()

    useEffect(()=>
    {
       allProduct.map((item)=>{
           cartItems[item.productId]=1;
       })
       console.log(cartItems)
       const productFInal={product:[{productId:1}],quantitySelected:cartItems[1]};
    },[]);
    useEffect((products)=>{
        axios.get(`http://localhost:2122/all/cart/details/${9652712157}`).then((response)=>setAllProducts(response.data.cart))
    },[])
    useEffect(()=>{
        Object.keys(cartItems).map((key)=>{
            const tempProduct=allProduct.filter((item)=>item.productId==key)[0];
            const p=cartItems[key]*tempProduct.offerPrice;
            const d=cartItems[key]*tempProduct.actualPrice;
            setDisCountPrice(d-p);
            setTotalPirce(p)
            setTotalPayableAmount(p)
        })
       ;

    },[cartItems])
    
    const ItemIncrement=((e)=>{
        const tempId=e.target.id;
        const tempProduct={...cartItems}
        if(tempId in cartItems){
            if(tempProduct[tempId]<5)
                tempProduct[e.target.id]+=1;
                setTotaItems(totalItems+1);
        }
        else if(tempProduct[tempId]){
            tempProduct[e.target.id]=1;

            setTotaItems(totalItems+1);
        }
        setCartItems(tempProduct)
       
    });
    const ItemDecrement=((e)=>{
        const tempId=e.target.id;
        const tempProduct={...cartItems}
      
            if(tempProduct[tempId]>1){
                tempProduct[tempId]-=1;
                setCartItems(tempProduct)

            }
    });
    return (
        <>
        <div className='view-cart-main-body'>
            <div className='view-cart-main-body-left-part'>
                    <div className='view-cart-main-body-left-part-head'>
                        <div >
                            <a ><div className='view-cart-service'>Flipkart (1)</div></a>
                        </div>
                        <div>
                        <a style={{cursor:"pointer"}}>Grocery</a>
                        </div>
                    </div>
                    <div className='abcd'><span>&emsp;</span></div>
                    <div className='view-cart-main-body-part-center'>
                       <div>
                           <div><p>From Saved Address</p></div>
                       </div>
                       <div><button type="button" class="btn btn-outline-primary">Entry Delivery PinCode</button></div>
                    </div>
                    <div className='abcd'><span>&emsp;</span></div>
                    <div id='view-cart-scroll'>
                    { allProduct.map((product)=>(
                    <div className='view-cart-selected-item-card'>
                        <div className='view-cart-selected-item-card-image'>
                           <img src={product.imageUrl}/>
                           <br/><br/>
                           <div class="view-cart-selected-item-count">
                               <button className="cart-item-count" disabled="" id={product.productId} onClick={(e)=>ItemDecrement(e)}> – </button>
                                <div class="">
                                  <input type="text" className="item-count" value={product.quantitySelected} placeholder="1" readOnly></input>
                                </div>
                                <button className='cart-item-count1' id={product.productId} onClick={(e)=>ItemIncrement(e)}> + </button>
                           </div>
                        </div>
                        
                        <div className='view-cart-selected-item-card-details'>
                           <div><p>{product.name} {product.model} {product.color}<p><small>Seller:IndiFlashMart</small></p></p></div>
                           <div className='view-cart-selected-item-card-details-price'> 
                               <small><del>₹{product.actualPrice}</del></small>&emsp;
                               <p>₹ {product.offerPrice}</p>
                               <p style={{marginLeft:"1rem",fontSize:"15px,",color:"green"}}>{((product.actualPrice-product.offerPrice)/product.actualPrice*100).toFixed(0)} %Off</p>
                           </div>
                           <br></br><br></br>
                           <div className='view-cart-selected-item-controls'>
                            <p><a>Save For Later</a></p>&emsp;
                           <span><a>Remove</a></span></div>
                        </div>
                    </div>
                    )) }
                    </div>
                    <div className='view-cart-item-place-order'>
                        <div className='view-cart-item-enddiv'><button className="view-cart-item-place-order1"><span>Place Order</span></button></div>
                    </div>
            </div>
            <div className='view-cart-right-part'>
                <div className='view-cart-item-right-part-innerdiv'>
                   <h6 style={{opacity:"50%"}}>PRICE DETAILS</h6>
                </div>
                <hr/>
                <div className='view-cart-item-right-part-innerdiv'><div class="view-cart-item-right-table"><div class="view-cart-item-right-table1">
                    <div class="view-cart-item-right-table2"><div class="view-cart-item-right-table3">Price ({totalItems} items)</div></div>
                        <span> ₹{totalPrice}</span></div><div class="view-cart-item-right-table1"><div class="view-cart-item-right-table2">
                            <div class="view-cart-item-right-table3">Discount</div></div>
                                <div class="view-cart-item-right-table4">− ₹{disCountPrice}</div></div><div class="view-cart-item-right-table1"><div class="view-cart-item-right-table2">
                                    <div class="view-cart-item-right-table3">Delivery Charges</div></div>
                                <span><span class="view-cart-item-right-table4 _33nGE1">Free</span></span></div> <div class="view-cart-total-price">
                                <div class="view-cart-item-right-table1"><div class="view-cart-item-right-table2">
                                    <div class="view-cart-item-right-table3">Total Amount</div> </div><span><div><div >
                                        <div class="view-cart-item-right-table2">
                                            <div class="view-cart-item-right-table3"></div></div><span> ₹{totalPayableAmount}</span></div>
                                        </div></span></div></div>
                            <div class="view-cart-item-end">You will save &nbsp;₹{disCountPrice}&nbsp;on this order</div></div>
                </div>
            </div>   
        </div>
        </>
        
    );
};
export default ViewCart;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AllItems.css';
// toast.configure()
const AllItems = props => {
    const catageories=["Electronics","TVs & Appliances","Men","Women"," Baby & kids","Home & Furniture"," Sports, Books & More"];
    const filterData=["Brand","Customer Ratings","GST Invoice Available","Features","Availability","Discount"];
    const location=useLocation();
    const [selectedCatageory,setSelectedCatageory]=  useState(location.state.selectedCatageory);
    const [allProducts,setAllProducts]=useState([]);
    const [productList,setProductList]=useState([])
    const [loadStatus,setLoadStatus]=useState(true);
    const [emptyProductsError,setEmptyProductError]=useState("");
    var [inActiveSortOption,setInactiveSortOption]=useState("");
    var [activeSortOption,setActiveSortOption]=useState("");
    const sort1="View-item-popularity";
    var [sortOf,setSortOf]=useState(true);
    const [count,setCount]=useState(0)
    const navigate = useNavigate();
    
    // let activeSortOption;
    // let inActiveSortOption;
    var a;
    var b;
    
    useEffect(()=>{
        setLoadStatus(!loadStatus)
        setLoadStatus(true)
    },[])
    useEffect(()=>{
     axios.get(`http://localhost:2122/product/sort/productsitems/${selectedCatageory}/${activeSortOption}`).then((response)=> setAllProducts(response.data)).catch((error)=>setEmptyProductError(error.response.data.message));
    //  console.log(allProducts)
     setProductList(allProducts);   
    },[loadStatus])
    
    // console.log(productList)
//    console.log(productList)
    // const item1=[{
    //     id:1,
    //     name:"REDMI",
    //     model:"10A",
    //     color:"Sea Blue",
    //     ram:"64 GB",
    //     ratings:"5670",
    //     reviews:"509",
    //     actualPrice:"14099",
    //     offerPrice:"8000",
    //     features:["16.59 cm (6.53 inch) Display","13MP Rear Camera","5000 mAh Battery","1 Year Manufacturer Warranty"]
    // },{  id:2,
    //     name:"REDMI",
    //     model:"10A",
    //     color:"Sea Blue",
    //     ram:"64 GB",
    //     ratings:"5670",
    //     reviews:"509",
    //     actualPrice:"14099",
    //     offerPrice:"8000",
    //     features:["16.59 cm (6.53 inch) Display","13MP Rear Camera","5000 mAh Battery","1 Year Manufacturer Warranty"]
    // },{  id:3,
    //     name:"REDMI",
    //     model:"10A",
    //     color:"Sea Blue",
    //     ram:"64 GB",
    //     ratings:"5670",
    //     reviews:"509",
    //     actualPrice:"14099",
    //     offerPrice:"8000",
    //     features:["16.59 cm (6.53 inch) Display","13MP Rear Camera","5000 mAh Battery","1 Year Manufacturer Warranty"]
    // },{  id:4,
    //     name:"REDMI",
    //     model:"10A",
    //     color:"Sea Blue",
    //     ram:"64 GB",
    //     ratings:"5670",
    //     reviews:"509",
    //     actualPrice:"14099",
    //     offerPrice:"8000",
    //     features:["16.59 cm (6.53 inch) Display","13MP Rear Camera","5000 mAh Battery","1 Year Manufacturer Warranty"]
    // },{  id:5,
    //     name:"REDMI",
    //     model:"10A",
    //     color:"Sea Blue",
    //     ram:"64 GB",
    //     ratings:"5670",
    //     reviews:"509",
    //     actualPrice:"14099",
    //     offerPrice:"8000",
    //     features:["16.59 cm (6.53 inch) Display","13MP Rear Camera","5000 mAh Battery","1 Year Manufacturer Warranty"]
    // }]
    const clickProduct=(e)=>{
        console.log(e.target.id)
        const selectedProduct=allProducts.filter((item)=>item.productId==e.target.id)[0];
        console.log(selectedProduct)
        navigate("/product", {
            state: { selectedProduct: selectedProduct },
          });

    }
    const sortOption=  (e)=>{
            axios.get(`http://localhost:2122/product/sort/productsitems/${selectedCatageory}/${e.target.id}`).then((response)=> setAllProducts(response.data)).catch((error)=>setEmptyProductError(error.response.data.message));
            console.log(count)
            if(count==0){
                a="popularity"
                b=a;
                a=e.target.id;
                document.getElementById(b).className="view-item-inactive";
                document.getElementById(a).className="View-item-active";
                setCount(1);
                setActiveSortOption(a);
            }
            else{
                console.log(a)
                b=activeSortOption;
                a=e.target.id;
                document.getElementById(b).className="view-item-inactive";
                document.getElementById(a).className="View-item-active";
                setActiveSortOption(a);
            }
    }
    return (
        <>
        <div>
        <div className='view-product-top-menu1'>
        {catageories.map((item)=>(
           <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {item}
           </a>
         </li>
       ))}
    </div>  
    <div className='view-item-main-body'>
        <div className='view-item-left-body'>
            <div className='view-item-sort-price'>
            <div>
                <p style={{fontSize:"20px"}}>
                    Price
                </p>
            </div>
            <div className='view-item-price'>
            <div>
            <select className="">
                    <option value="Min" className="">Min</option>
                    <option value="10000" className="">₹10000</option>
                    <option value="15000" className="">₹15000</option>
                    <option value="20000" className="">₹20000</option>
                    <option value="30000" className="">₹30000</option>
            </select>
            </div>&nbsp;&nbsp;
            <div><span>to</span></div>&nbsp;&nbsp;
            <div>
                <select className="">
                    <option value="10000" >₹10000</option>
                    <option value="15000" >₹15000</option>
                    <option value="20000" >₹20000</option>
                    <option value="30000" >₹30000</option>
                    <option value="Max" >₹30000+</option>
                </select>
            </div>
            </div> 
            </div>
            <br></br>
        {filterData.map((item,index)=>(      
        <div className='view-item-inner-left-body'>
                <div className='view-item-sort-body'>
                    <p><a class="" data-bs-toggle="collapse" href={`#${item.productId}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                           {item}</a></p>
                    <div class="collapse" id={`${item.productId}`}>
                            <div class="">
                                    <li>option 1</li><li>Option 2</li><li>Option 3</li><li>Option 4</li><li>Option 5</li>
                            </div>
                    </div> 
            </div>
            <hr></hr>
            </div>))}
        </div>
        <div className='view-item-right-body'>
            <div className='view-item-right-first-div'>
                <div className='view-item-right-top'>
                    <div>
                    <div className='view-item-right-nav'>
                        <div><a href='/'>Home&nbsp;&#62;</a></div>
        
                        <div><a>&nbsp;{selectedCatageory}</a></div>
                    </div>
                    <br></br>
                <h5>{selectedCatageory}</h5>
                <div className="view-item-sory-options">
                    <span className="view-item-sortoption">Sort By</span>
                    <div className="View-item-active" id="popularity" onClick={(e)=>sortOption(e)}>Popularity</div>
                    <div className="view-item-inactive" id="lowtohigh"onClick={(e)=>sortOption(e)}>Price -- Low to High</div>
                    <div className="view-item-inactive" id="hightolow"onClick={(e)=>sortOption(e)}>Price -- High to Low</div>
                    {/* <div className="view-item-inactive" id="new"onClick={(e)=>sortOption(e)}>Newest First</div> */}
                    </div>   
                </div>
            </div>
            </div>
            <div>
        {allProducts.length==0 ? <div className='view-item-right-empty-list-error'> <p>{emptyProductsError}</p> </div> : allProducts.map((product)=>(
           <div className='view-item-right-card-head'>
              <div className='view-item-right-card'>
                <div className='view-item-right-image'>
                    <img src={product.imageUrl} className='view-image'></img>
                </div>
                
                    <div className='view-item-card-right'>
                    <div key={product.id}>
                     <a className="view-item-card-right-link"  id={product.productId} onClick={(e)=>clickProduct(e)}>{product.name} {product.model} ({product.color} {product.specification})</a>
                    </div>
                    <div>
                        <p className='view-item-right-ratings'>{product.ratings} Ratings & {product.reviews} Reviews</p>
                    </div>
                    <div>
                        <ul className='view-item-card-right-features'>{
                        product.features.map((feature)=>(
                            <li>{feature}</li>
                        ))}
                        </ul>
                    </div>
                   
                </div>
                <div className='view-item-card-right-end'>
                       <div>
                           <div>
                               <h3>₹ {product.offerPrice}</h3>
                            </div>
                       </div>
                       <div className='view-item-card-right-end-discount'>
                            <div><p>₹<del>{product.actualPrice}</del></p></div>
                            <div><h6>{((product.actualPrice-product.offerPrice)/product.actualPrice*100).toFixed(0)}% off</h6></div>
                            <div><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"/></div>
                       </div>
                       
                </div>
               
              </div>
              
           </div>
            ))}
        </div>
       
    </div></div>
        </div>
        </>
        
    );
};

export default AllItems;
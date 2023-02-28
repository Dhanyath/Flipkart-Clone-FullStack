import {makeStyles, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        width:"100%",
        margin: '55px 0px 0px 0px',
        border:"10px 0px 0px 0px solid black",
        overflowX: 'overlay',
        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s"
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
}));

const NavBar = () => {
    const navigate=useNavigate();
    const viewAllProducts=(e)=>{
    navigate("/all/products", {
        state: { selectedCatageory: e.target.id },
      })
}
     const navData = [
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100', text: 'Top Offers' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', text: 'Grocery' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Mobiles' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Fashion' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Electronics' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100', text: 'Home' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100', text: 'Appliances' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100', text: 'Travel' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', text: 'Beauty, Toys & More' }
    ];
    const classes = useStyle();
    return (
        <div className={classes.component}>
            <br></br>{
                navData.map(temp => (
                  
                    <div className={classes.container}>
                        <img src={temp.url} className={classes.image} alt=""/>
                        <Typography id={temp.text} className={classes.text} onClick={(e)=>viewAllProducts(e)}>{temp.text}</Typography>
                    </div>
                ))
            }<br></br><br></br><br></br>
        </div>
    )
}

export default NavBar;
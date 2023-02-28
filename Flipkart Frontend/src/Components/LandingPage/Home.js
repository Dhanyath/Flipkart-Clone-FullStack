import React from 'react';
import NavBar from './Child/NavBar';
import Header from '../Header/Header';
import MidSlide from './Child/MidSlide';
import { Box, makeStyles } from '@material-ui/core';
import MidSection from './Child/MidSection';
import Banner from './Child/Banner';
import Slide from './Child/Slide';


const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = props => {
     const dealData = [
        { 
            id: 'product1',
            url: 'https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70', 
            detailUrl: '',
            title: {
                shortTitle: 'Mobile Covers'
            }, 
            discount: 'Extra 10% Off', 
            tagline: 'Deal of the day' 
        },
        { 
            id: 'product2',
            url: 'https://rukminim1.flixcart.com/image/200/200/k5lcvbk0/moisturizer-cream/9/w/g/600-body-lotion-aloe-hydration-for-normal-skin-nivea-lotion-original-imafz8jb3ftt8gf9.jpeg?q=70', 
            title: {
                shortTitle: 'Skin & Hair Care'
            },
            discount: 'From 99+5% Off', 
            tagline: 'Shampoos, Face Washes & More' 
        },
        { 
            id: 'product3',
            url: 'https://rukminim1.flixcart.com/flap/200/200/image/74bc985c62f19245.jpeg?q=70', 
            title: {
                shortTitle: 'Skybags & Safari'
            }, 
            discount: 'Upto 70% Off', 
            tagline: 'Deal of the Day' 
        },
        { 
            id: 'product4',
            url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
            detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
            title: {
                shortTitle: 'Smart Watches',
                longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
            }, 
            price: {
                mrp: 6999,
                cost: 4049,
                discount: '42%'
            },
            description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
            discount: 'Grab Now', 
            tagline: 'Best Seller' 
        },
        { 
            id: 'product5',
            url: 'https://rukminim1.flixcart.com/flap/150/150/image/b616a7aa607d3be0.jpg?q=70', 
            title: {
                shortTitle: 'Sports & Fitness Essentials'
            }, 
            discount: 'Upto 80% Off', 
            tagline: 'Ab Exerciser, Yoga & more' 
        }
    ];
    
    
    const classes = useStyle();
    const products = dealData;
    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products}
                    title='Discounts for You'
                    timer={true}
                    multi={true}
                />
                <Slide
                    data={products}
                    title='Suggested Items'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={products}
                    title='Top Selection'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={products}
                    title='Recommended Items'
                    timer={false}
                    multi={true}
                />
            </Box>
        </>
    );
};
export default Home;
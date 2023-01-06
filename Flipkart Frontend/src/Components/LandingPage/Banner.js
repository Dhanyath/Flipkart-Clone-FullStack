import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles(theme => ({
    
    container: {
    //     width:"98%",
    //    margin:"10px 0px 0px 10px"
    },
    image: {
        width: '100%',
        height: 280,
        // [theme.breakpoints.down('sm')]: {
        //     objectFit: 'cover',
        //     height: 180
        // }
    }
}))

const Banner = () => {
    const bannerData = [
        'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50'
    ]
   
    const classes = useStyle();
    return (
        <Carousel 
            autoPlay={true} 
            animation="slide" 
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            className={classes.container}
            StylesProvider
            navButtonsProps={{ 
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                }
            }}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image} alt="" />
                ))
            }
        </Carousel>
    )
}

export default Banner;
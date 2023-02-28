// import React from 'react';
// import { makeStyles, Box, Typography, Badge, Button} from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { ShoppingCart } from '@material-ui/icons';

// const useStyle = makeStyles(theme => ({
//     container: {
//         display: 'flex',
//         [theme.breakpoints.down('sm')]: {
//             display: 'block'
//         }
//     },
//     wrapper: {
//         margin: '0 5% 0 auto', 
//         display: 'flex',    
//         '& > *': {
//             marginRight: 50,
//             textDecoration: 'none',
//             color: '#FFFFFF',
//             fontSize: 12,
//             alignItems: 'center',
//             [theme.breakpoints.down('sm')]: {
//                 color: '#2874f0',
//                 alignItems: 'center',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 marginTop: 10
//             }      
//         },
//         [theme.breakpoints.down('sm')]: {
//             display: 'block'
//         }   
//     },
//     login: {
//         color: '#2874f0',
//         background: '#FFFFFF',
//         textTransform: 'none',
//         fontWeight: 600,
//         borderRadius: 2,
//         padding: '5px 40px',
//         height: 32,
//         boxShadow: 'none',
//         [theme.breakpoints.down('sm')]: {
//             background: '#2874f0',
//             color: '#FFFFFF'
//         }   
//     }
// }));


// const CustomButtons = () => {
//     const classes = useStyle();
//     return (
//         <Box className={classes.wrapper}>
//            <Link><Button className={classes.login} variant="contained" >Login</Button>
//                 </Link>
//             <Link>
//                 <Typography style={{ marginTop: 2 }}>More</Typography>
//             </Link>
//             <Link to='/cart' className={classes.container}>
//                 <Badge badgeContent={0} color="secondary">
//                     <ShoppingCart />
//                 </Badge>
//                 <Typography style={{ marginLeft: 10 }}>Cart</Typography>
//             </Link>
//         </Box>
//     )
// }

// export default CustomButtons;

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/LandingPage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewProduct from './Components/Products/ViewProduct';
import AllItems from './Components/Products/AllItems';
import ViewCart from './Components/Cart/ViewCart';
import { Footer } from './Components/Footer/Footer';

function App() {
  const products=[];
  return (
    <>
       <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ViewProduct />} />
          <Route path='/all/products' element={<AllItems/>}/>
          <Route path='/cart' element={<ViewCart/>}/>
          {/* <Route path='/login' element={<LoginOne />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Abcd/> */}
      {/* <FlipKartLogin/> */}
    </>
  );
}

export default App;

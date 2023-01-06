
import './App.css';
import Header from './Components/LandingPage/Header';
import { Cateline } from './Components/LandingPage/Catadiv';
import Home from './Components/LandingPage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/LandingPage/Footer';
import ViewProduct from './Components/LandingPage/ViewProduct';
import AllItems from './Components/LandingPage/AllItems';
import ViewCart from './Components/LandingPage/ViewCart';

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

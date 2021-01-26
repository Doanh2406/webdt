//import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import ThanhToan from './components/Page/ThanhToan';
import CuaHang from './components/Page/CuaHang';
import GioHang from './components/Page/GioHang';
import MuaNgay from './components/Page/MuaNgay';
import Mobile from './components/Page/mobile';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <header>
         <Header />
       </header>
       <main className="main-app">
        <Route path="/" component={Home} exact></Route>
        <Route path="/thanhtoan" exact component={ThanhToan}/>
        <Route path ="/cuahang" exact component={CuaHang}/>
        <Route path ="/giohang" exact component={GioHang}/>
        <Route path ="/muangay"  exact component={MuaNgay} />
        <Route path ="/mobile"  exact component={Mobile} />
       </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

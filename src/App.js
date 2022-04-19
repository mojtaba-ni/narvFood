import React from 'react'
import HomeScreen from './page/homescreen'
import MenuScreen from './page/menuscreen'
import Footer from './components/footer'
import Fame from './components/famous'
import MobilePart from './page/mobilePart'
import ScrolToTop from './components/scroltotop'
import 'swiper/css';
import './App.css'

function App() {
  return (
    <div className="App">
        <ScrolToTop/>
        <HomeScreen/>
        <MenuScreen/>
        <Fame/>
        <MobilePart/>
        <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './About';

export default function App(){
    return(
        <div className="App">
            {/*<Nav />*/}
            <Header />
            <About />
            <Main />
            <Footer />
        </div>
    )
}


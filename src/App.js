import React from 'react';
import './App.css'
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export default function App(){
    return(
        <div className="App">
            <Nav />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}


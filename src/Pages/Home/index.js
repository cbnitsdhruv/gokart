import React from "react";
import {Container } from 'react-bootstrap';
import Header from '../../Components/Header';
import MainBanner from '../../Components/HomeBanner';
import Products from '../../Components/Products/Product'
import Footer from '../../Components/Footer'

const Index = (props) => {
     
    return (
        <div className='Home-page'>
            <Header />
            <MainBanner  />
            <Container className="py-5">
                <Products />
            </Container>


            <Footer />
        </div>
    )
}

export default Index;
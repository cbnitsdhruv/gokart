import React from 'react'
import {Container } from 'react-bootstrap';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Products from '../../Components/Products/Product'

const index = () => {  
  return (
    <div className='product-list'>
      <Header />
      <Container className="py-5">
        <Products  />
      </Container>
      <Footer />
    </div>
  )
}
export default index;

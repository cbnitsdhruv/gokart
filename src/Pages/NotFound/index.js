import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './style.css';

const index = () => {
  return (
    <div className='pageNotFound'>
      <div className='text-center bg-white'>
        <h3>oops!page not found</h3>
        <p>oops! looks like the page you are looking for it doesn't exist. it might be moved or deleted</p>
        <Button variant='danger'><Link to="/" className='text-white text-decoration-none' >Go To Home</Link></Button>
      </div>

    </div>
  )
}

export default index;
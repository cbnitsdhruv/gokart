import React, {useEffect, useState} from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import ImagePath from '../../ImagePath';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/Action/actions';


const Product = () => {   
    const [filterItem, setFilterItem] = useState('')
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state?.cartItems);

    useEffect(()=> {
         const filterId = cartItems.cardData.map((el) => el.id);
         setFilterItem(filterId);
    },[cartItems])

    const data = [
        {
            productImage: require('../../Assets/Images/p1.jpg'),
            productTitle: 'First product label',
            productDescription: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            altText: 'Product image',
            price: 250,
            id: 1
        },
        {
            productImage: `${ImagePath.product2}`,
            productTitle: 'Second product label',
            productDescription: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            altText: 'Product image',
            price: 350,
            id: 2
        },
        {
            productImage: `${ImagePath.product3}`,
            productTitle: 'Third product label',
            productDescription: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            altText: 'Product image',
            price: 350,
            id: 3
        },
        {
            productImage: `${ImagePath.product4}`,
            productTitle: 'Fourth product label',
            productDescription: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            altText: 'Product image',
            price: 150,
            id: 4
        },
        {
            productImage: `${ImagePath.product5}`,
            productTitle: 'Fifth product label',
            productDescription: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            altText: 'Product image',
            price: 750,
            id: 5
        },
        {
            productImage: `${ImagePath.product6}`,
            productTitle: 'Sixth product label',
            productDescription: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            altText: 'Product image',
            price: 550,
            id: 6
        },
        {
            productImage: `${ImagePath.product7}`,
            productTitle: 'Seventh product label',
            productDescription: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            altText: 'Product image',
            price: 650,
            id: 7
        },
        {
            productImage: `${ImagePath.product8}`,
            productTitle: 'Eighth product label',
            productDescription: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            altText: 'Product image',
            price: 350,
            id: 8
        },
    ]

    

    return (
        <>
            <Row sm={2} md={3} lg={4} >
                {
                    data.map((item, idx) =>
                        <Col key={idx}>
                            <Card className='productcard mb-3 position-relative'>
                                <Card.Img variant="top" src={item.productImage} alt={`${item.altText}`} className="img-fluid" />
                                <h6 className='pprice'><strong>Price: ${item.price}</strong></h6>
                                <Card.Body>
                                    <Card.Title>{item.productTitle}</Card.Title>

                                    <Card.Text>
                                        {item.productDescription}
                                    </Card.Text>
                                    <div className='d-flex justify-content-between'>
                                        <Button variant="primary">Details</Button>
                                        {
                                            filterItem.includes(item.id) ? <Button variant="secondary" onClick={() => dispatch(removeFromCart({...item})) }>Remove from Cart</Button> :
                                            <Button variant="secondary" onClick={() => dispatch(addToCart({ ...item }))}>Add to Cart</Button>
                                        }
                                       </div>
                                </Card.Body>
                            </Card>

                        </Col>
                    )
                }
            </Row>
        </>
    )
}

export default Product;

import React, { useEffect, useState } from 'react';
import ImagePath from '../../ImagePath';
import { Container, Navbar, Nav, NavDropdown, Button, Badge, Modal, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Index = () => {
    const cartItems = useSelector(state => state?.cartItems);
    const [show, setShow] = useState(false);
    const [loginField, setLoginField] = useState(true);
    const [forgotPasswordField, setforgotPasswordField] = useState(true)
    const [errorMessages, setErrorMessages] = useState({});
    const [resgisterdUser, setResgisterdUser] = useState([]);
    const [inputValue, setInputValue] = useState({

        uname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    const handleRegister = () => {
        setLoginField(!loginField)
    }

    const handleForgotPasswordField = () => {
        setforgotPasswordField(!forgotPasswordField)
    }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const handaleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        setInputValue({ ...inputValue, [name]: value });
    }

    const handleSubmit = (e) => {
        // Prevent page reload
        e.preventDefault();
        const newUser = { ...inputValue, id: new Date().getTime().toString() }
        setResgisterdUser([...resgisterdUser, newUser]);
        console.log('resgiter', resgisterdUser)
    };

    return (
        < >
            <header className='header-component'>
                <Navbar collapseOnSelect expand="lg" className='mainnav'>
                    <Container>
                        <Navbar.Brand >
                            <Link to="/"><img src={ImagePath.Logo} alt="logo" className='img-fluid' /></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto searchbox-wrap justify-content-between">
                                <div className='topsearchbox d-flex'>
                                    <input type="search" className="form-control" placeholder="Search Products Here..." />
                                    <span className='search-button'><i className='fa fa-search'></i></span>
                                </div>
                                <Button variant='light px-lg-5' onClick={handleShow}>LOGIN</Button>

                            </Nav>
                            <Nav className='align-items-center link-wrap'>
                                <Link to="/become-seller">Become a seller</Link>
                                <NavDropdown title="More Action" id="collasible-nav-dropdown">
                                    <NavDropdown.Item>Action</NavDropdown.Item>
                                    <NavDropdown.Item>Another action</NavDropdown.Item>
                                    <NavDropdown.Item>Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <span className='nav-link position-relative'>
                                    <Link to="/cart">
                                        Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <Badge bg="white" className='badgecart'>{cartItems && cartItems.cardData.length ? cartItems.cardData.length : 0}</Badge>
                                    </Link>
                                </span>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Modal className='loginModal' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Button variant="link modalclose" onClick={handleClose}>
                    <i className='fa fa-close'></i>
                </Button>
                <Modal.Body className='p-0'>
                    <Row className='mx-0 h-100'>
                        <Col md={6} className="p-0">
                            <div className='login-bg h-100 position-relative'>
                                <img src={ImagePath.LoginBg} className="img-fluid" alt="background" />
                                <div className='overlay p-4 ovtext'>


                                    {loginField ?
                                        <div>
                                            <h2>LOGIN</h2>
                                            <h5>get access to your Orders, Wishlist and Recommendations</h5>
                                        </div>
                                        :
                                        <div>
                                            <h2>Looks like you're new here!</h2>
                                            <h5>Sign up with your Email or Mobile to get started </h5>
                                        </div>
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="pe-0">
                            <div className='login-form pt-4 '>
                                <Form className='d-block pe-4' onSubmit={handleSubmit} autoComplete="off">
                                    {!loginField ?
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" autoComplete="off" value={inputValue.name} onChange={handaleInput} name='uname' placeholder="Enter Name" />
                                            {renderErrorMessage("uname")}
                                        </Form.Group> : null
                                    }

                                    <Form.Group className="mb-2">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" autoComplete="off" value={inputValue.email} onChange={handaleInput} name='email' placeholder="Enter email" />
                                        {renderErrorMessage("email")}
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    {!loginField ?
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Mobile No.</Form.Label>
                                            <Form.Control type="text" autoComplete="off" value={inputValue.phone} onChange={handaleInput} name='phone' placeholder="Mobile No." />
                                            {renderErrorMessage("phone")}
                                        </Form.Group>
                                        : null
                                    }
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" autoComplete="off" value={inputValue.password} onChange={handaleInput} name='password' placeholder="Password" />
                                        {renderErrorMessage("uname")}
                                    </Form.Group>
                                    {!loginField ?
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" autoComplete="off" value={inputValue.confPassword} onChange={handaleInput} name='confirmPassword' placeholder="Confirm Password" />
                                            {renderErrorMessage("confirmPassword")}
                                        </Form.Group>
                                        : null
                                    }
                                    <Form.Group className="mb-2 d-flex justify-content-between align-items-center">
                                        <Form.Check type="checkbox" label="Remember Me" name='rememberMe' />
                                        {renderErrorMessage("rememberMe")}
                                        {loginField ?
                                            <Button variant='link forgottext' onClick={handleForgotPasswordField}>Forgot Password</Button>
                                            : null
                                        }
                                    </Form.Group>

                                    <small className='text-muted py-4 d-block'>By continuing, you agree to Flipkart's <Link to="#">Terms of Use</Link> and <Link to="#">Privacy Policy</Link>.</small>
                                    <div className='mt-5 mb-5'>
                                        {loginField ?
                                            <Button variant="primary w-100 py-1" type="submit" >
                                                LOGIN
                                            </Button> :
                                            <Button variant="primary w-100 py-1" type="submit">
                                                SIGN UP
                                            </Button>
                                        }
                                    </div>

                                    <div className='text-center reg-box-text'>
                                        {loginField ?
                                            <h5>New to kart?<Button variant='link' className='p-0' onClick={handleRegister}>Create an account</Button></h5>
                                            :
                                            <h5>Existing User? <Button variant='link' className='p-0' onClick={handleRegister}>Log in</Button></h5>
                                        }
                                    </div>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Index;
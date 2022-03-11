import React, {useState} from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './login.css';

import {Container, Form, Button, Row, Col, Modal,Spinner} from 'react-bootstrap'

const Login = () =>  {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sucess, setSucess] = useState(false);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (enteredEmail.trim().length === 0) {
            alert("Enter a Valid Email!")
        } else if (enteredPassword.trim().length < 8) {
            alert("Enter a Valid Password!") 
        } else {
            setLoading(true)
            setLoginStatus(true)
            setTimeout(() => {
                setLoading(false);
                setSucess(true);
                setLoginStatus(true)
            }, 2000);

        }
    }
    console.log(loading)
    const onEmail = (event) => {
        setEnteredEmail(event.target.value);
    }

    const onPassword = (event) => {
        setEnteredPassword(event.target.value);
    }


    return (
        <div>
            {!loginStatus && <Container>
                <Form onSubmit={onFormSubmit}>
                <h2 className="heading">LOGIN</h2>
                    <Row>
                        <Col md>
                            <Form.Group className="inner-container">
                                <Form.Label class="m-2">Email Address</Form.Label>
                                <Form.Control className="form-input" type="email" placeholder="name@email.com" onChange={onEmail} />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="inner-container">
                                <Form.Label class="m-3">Password</Form.Label>
                                <Form.Control className="form-input" type="password" placeholder="Password" onChange={onPassword}/>
                            </Form.Group>
                        </Col>
                        <div className="button-container">
                            <div class="m-3">
                                <Button type="submit" class="btn btn-primary">Login</Button>
                            </div>
                        </div>
                    </Row>
                </Form>
            </Container>}
            <div>
                <div className="spinner">
                {loading && 
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                </div>
                {sucess && 
                    <div className='sucess'>
                        {loginStatus && <Modal.Dialog>
                            <Modal.Header>
                            <Modal.Title>Login</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ThumbUpIcon className='icon' sx={{fontSize:50,}} />
                                <p className="message">Sign Up Successfull</p>
                            </Modal.Body>
                        </Modal.Dialog>}
                    </div>
                }
            </div>
        </div>
    )

};

export default Login;
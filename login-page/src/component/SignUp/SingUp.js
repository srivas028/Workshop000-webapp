import React, {useState} from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {Container, Form, Button, Row, Col, Modal, Spinner} from 'react-bootstrap'
import './SignUp.css';

const SignUp = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredMobileNumber, setEnteredMobileNumber] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState("");
    const [initial, setInitial] = useState(true)
    const [status, setStatus] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const onUserDetailsSubmit = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0) {
            alert("Enter a Valid Name!");
        } 

        else if (enteredMobileNumber.trim().length < 10 && enteredMobileNumber > 10) {
            alert("Enter a Valid Mobile Number!")
        } 
        else if (enteredEmail.trim().length === 0){
            alert("Enter a Valid Email!")            
        }

        else if (enteredPassword.trim().length < 8) {
            alert("Enter a Valid Password!")
        } else {
            setInitial(false)
            setTimeout(() => {
                setSpinner(false)
                setStatus(true)
            }, 2000);
            setSpinner(true)
        }
    }

    const onUserName = (event) => {
        setEnteredName(event.target.value);
        console.log(event.target.value)
    };

    const OnUserMobile = (event) => {
        setEnteredMobileNumber(event.target.value);
        console.log(event.target.value);
    }

    const onUserEmail = (event) => {
        setEnteredEmail(event.target.value)
    }

    const onUserPassword = (event) => {
        setEnteredPassword(event.target.value)
    }

    return (
        <div>
        {initial && <Container>
            <Form onSubmit={onUserDetailsSubmit}>
            <h2 className="heading">SIGN UP</h2>
                <Row className="m-3">
                    <Col md>
                        <Form.Group className="inner-container">
                            <Form.Label className="m-2 title">User Name</Form.Label>
                            <Form.Control className="form-input" type="text" placeholder="User Name" onChange={onUserName}/>
                        </Form.Group>
                    </Col>
                    <Col md>
                        <Form.Group className="inner-container">
                            <Form.Label className="m-2 title">Mobile Number</Form.Label>
                            <Form.Control className="form-input" type="number" min="1" placeholder="Mobile Number" onChange={OnUserMobile}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col md>
                        <Form.Group className="inner-container">
                            <Form.Label className="m-1 title">Email Address</Form.Label>
                            <Form.Control className="form-input" type="email" placeholder="name@email.com" onChange={onUserEmail}/>
                        </Form.Group>
                    </Col>
                    <Col md>
                        <Form.Group className="inner-container">
                            <Form.Label className="m-3 title">Password</Form.Label>
                            <Form.Control className="form-input" type="password" placeholder="Password" onChange={onUserPassword}/>
                        </Form.Group>
                    </Col>
                    <div className="button-container">
                        <div class="m-3">
                            <Button type="submit" class="btn btn-primary">Sign Up</Button>
                        </div>
                    </div>
                </Row>
            </Form>
        </Container>}
        <div>
        <div className="spinner">
                {spinner && 
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                </div>
            {status && 
                <div className='sucess'>
                    <Modal.Dialog>
                        <Modal.Header>
                        <Modal.Title>SignUp</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ThumbUpIcon className='icon' sx={{fontSize:50,}} />
                            <p className="message">Sign Up Successfull</p>
                        </Modal.Body>
                    </Modal.Dialog>
                </div>
                }
        </div>
        </div>
    )
}

export default SignUp;
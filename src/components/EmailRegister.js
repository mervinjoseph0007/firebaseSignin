import {Button,Form, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleSignin from './GoogleSignin';
import { UserAuth } from '../context/AuthContext';
import { useRef } from 'react';




export default function EmailRegister() {

    var email = useRef(null);
    var password = useRef(null);
    var cPassword = useRef(null);

    const {createUser} = UserAuth();

    const handleRegister = async(email, password) => {
        await createUser(email, password);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        email = email.current.value
        password = password.current.value
        cPassword =  cPassword.current.value
        if(password!=cPassword){
            alert("Passwords doensn't match");
        }
        else{
            handleRegister(email, password)
        }
        // console.log(email, password, cPassword)
    }

  return (
    <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
        <h3 className='text-center m-3'>Welcome to Firebase Practise</h3>
        <Container className='d-flex justify-content-center my-3'>
            <div className="p-5">
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref = {email} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={password}type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control ref = {cPassword} type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Sign in
        </Button>
        </Form>
            <p className='my-1'>
                Already Have an Account?{' '}
                <Link to='/Signin'>Sign in Here</Link>
            </p>
        
            </div>
            <GoogleSignin />
        </Container>
    </div>
    
    
  );
}

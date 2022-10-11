import {Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { UserAuth } from '../context/AuthContext';


export default function EmailSignin() {

    var email = useRef(null);
    var password = useRef(null);

    const {signInUser} = UserAuth();

    const handleSignin = async(e) => {
        e.preventDefault()
        email = email.current.value
        password = password.current.value

        await signInUser(email, password)
        
    }

  return (
    <div className="p-5">
    <Form onSubmit={handleSignin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign in
      </Button>
    </Form>
        <p className='my-1'>
            Don't have an account?{' '}
            <Link to='/EmailRegister' >Register Here</Link>
        </p>
    
    </div>
    
  );
}

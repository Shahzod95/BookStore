import React, { useState } from "react";
import {auth} from "../Config/firebase";
import Lottie from "react-lottie";
import animationData from "../lotties/reading-in-login";
import { Form, Button } from "react-bootstrap";
const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [hasAccount, setHasAccount] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [errorMsg, setErrorMsg] = useState({ code: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  }

  const handleLogin = async () => {
    try {
      const { email, password } = user;
      const authenticatedUser = await auth.signInWithEmailAndPassword(email, password);
      console.log(authenticatedUser);
    } catch (error) {
      console.log(error);
      setErrorMsg({ code: error.code, message: error.message })
    }
  }
  
  const handleSignUp = async () => {
    try {
      const { email, password } = user;
      const authenticatedUser = await auth.createUserWithEmailAndPassword(email, password);
      console.log(authenticatedUser);
    } catch (error) {
      console.log(error);
      setErrorMsg({ code: error.code, message: error.message })
    }
  }

  const { email, password } = user;

  return (
    <div className="login-page">
      <div className="login-image">
        <Lottie options={defaultOptions} height={400} max-width={600} />
      </div>
      <Form className="login-form">
        <h1>Get's Started</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className="btn-container">
          {hasAccount ? (
            <>
              <Button type="submit" onClick={handleLogin} className="login-button">
                Sign In
              </Button>
              <p>
                Don't have an account?
                <span
                  className="register"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  {" "}
                  Register{" "}
                </span>
                here.
              </p>
            </>
          ) : (
            <>
              <Button type="submit" onClick={handleSignUp} className="login-button">
                Register
              </Button>
              <p>
                Already have an account?
                <span
                  className="register"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  {" "}
                  Sign In{" "}
                </span>
                here.
              </p>
            </>
          )}
        </div>
      </Form>
    </div>
  );
};
export default Login;

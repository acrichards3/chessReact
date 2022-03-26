import React, { useState, useRef } from 'react';
import { Modal, Form, Alert } from 'react-bootstrap';
import { Button } from '@blueprintjs/core';
import { useAuth } from '../../../contexts/AuthContext';
import './account.css';

export default function SignUp(props) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  const handleClose = () => {
    props.setStatus('signedOut');
    props.setShow(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      props.setStatus('signedOut');
    } catch {
      setError('Failed to create account');
    }
    setLoading(false);
  }

  return (
    <>
      {console.log('ERROR: ', error)};
      <Button
        intent="primary"
        onClick={() => props.setStatus('signedOut')}
        className="signIn"
      >
        Login to ChessInfo
      </Button>
      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton onClick={() => props.setStatus('signedOut')}>
          <Modal.Title>Sign Up For ChessInfo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} type="submit" intent="success" large>
              Sign Up Now
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button intent="danger" onClick={handleClose} large>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

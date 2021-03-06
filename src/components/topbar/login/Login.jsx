import React, { useState, useRef } from 'react';
import { Modal, Form, Alert } from 'react-bootstrap';
import { Button } from '@blueprintjs/core';
import { useAuth } from '../../../contexts/AuthContext';
import './account.css';

export default function Login(props) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();

  const handleClose = () => {
    props.setStatus('signedOut');
    props.setShow(false);
  };

  const handleShow = () => props.setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      props.setStatus('signedIn');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }

  function handleSignup() {
      props.setStatus('signUp');
      props.setShow(true);
  }

  return (
    <>
      <Button intent="primary" onClick={handleShow} className="signIn">
        Login to ChessInfo
      </Button>

      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ChessInfo Login</Modal.Title>
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
            <Button disabled={loading} intent="primary" type="submit" large>
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={loading}
            intent="success"
            large
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Button intent="danger" onClick={handleClose} large>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

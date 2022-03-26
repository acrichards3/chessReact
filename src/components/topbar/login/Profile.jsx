import React, { useState } from 'react';
import { Modal, Form, Alert } from 'react-bootstrap';
import { Button } from '@blueprintjs/core';
import { useAuth } from '../../../contexts/AuthContext';
import './account.css';

export default function Profile(props) {
  const [error, setError] = useState('');
  const { logout } = useAuth();

  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  async function handleLogout() {
    try {
      await logout();
      props.setStatus('signedOut');
      props.setShow(false);
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <Button intent="primary" onClick={handleShow} className="signIn">
        Account Details
      </Button>

      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hello acricha3!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Chess.com Username"
              />
            </Form.Group>
          </Form>
          <Button intent="primary" large>
            Update Username
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button intent="success" large onClick={handleLogout}>
            Sign Out
          </Button>
          <Button intent="danger" onClick={handleClose} large>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

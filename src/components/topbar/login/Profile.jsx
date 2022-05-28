import React, { useState, useContext } from 'react';
import { InitContext } from '../../../contexts/InitialContext';
import { Modal, Form, Alert } from 'react-bootstrap';
import { Button } from '@blueprintjs/core';
import { useAuth } from '../../../contexts/AuthContext';
import { getAuth, updateProfile } from 'firebase/auth';
import { StoredContext } from '../../../contexts/StoredContext';
import './account.css';

export default function Profile(props) {
  const auth = getAuth();
  const [error, setError] = useState('');
  const [temporary, setTemporary] = useState('');
  const { logout } = useAuth();
  const { initialUser } = useContext(InitContext);
  const { setInitialUser } = useContext(InitContext);
  const { setStored } = useContext(StoredContext);

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

  function checkUser() {
    if (initialUser === 'HIKARU') {
      return <Modal.Title>Hello!</Modal.Title>;
    } else {
      return <Modal.Title>Hello {initialUser}!</Modal.Title>;
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setTemporary(e.target.value);
  }

  function handleSubmit(e) {
    console.log('worked');
    e.preventDefault();
    setInitialUser(temporary);
    setStored(temporary);
    updateProfile(auth.currentUser, { displayName: temporary });
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
        <Modal.Header closeButton>{checkUser()}</Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Chess.com Username"
                onChange={handleChange}
              />
            </Form.Group>
            <Button intent="primary" type="submit" large>
              Update Username
            </Button>
          </Form>
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

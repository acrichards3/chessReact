import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import Player from '../../data/setPlayer';
import './searchUser.css';

export default function SearchUser() {
  const [name, setName] = useState('hikaru');

  function handleChange(e) {
    setName(e.target.value);
  }

  Player(name);

  return (
    <div className="container">
      <div className="row">
        <Form>
          <FormGroup>
            <div className="col-lg-4 bar">
              <Input
                id="userInput"
                placeholder="Chess.com Username"
                type="text"
                onChange={handleChange}
              />
              <Button color="primary" type="submit">
                Submit
              </Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

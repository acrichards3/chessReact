import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import Player from "../../data/setPlayer";
import "./searchUser.css";

export default function SearchUser() {
  const [name, setName] = useState("hikaru");

  function handleChange(e) {
    if (e.target.value === "Update") {
      Player(name);
    } else {
        setter();
    }
    function setter() {
      setName(e.target.value);
    }
  }

  function handleKeyPress(e) {
      if (e.key === "Enter") {
          e.preventDefault();
      }
  }

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
                autoComplete="off"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              <Input type="button" value="Update" onClick={handleChange} />
            </div>
          </FormGroup>
        </Form>
        <div className="col">
          <h4>
            Displaying info for Chess.com user: <strong>{name}</strong>
          </h4>
        </div>
      </div>
    </div>
  );
}

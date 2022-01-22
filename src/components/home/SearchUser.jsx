import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import Player from "../../data/setPlayer";
import Stats from "../../data/getStats";
import "./searchUser.css";

export default function SearchUser() {
  const [name, setName] = useState("Hikaru");
  const [stored, setStored] = useState("Hikaru");

  function handleChange(e) {
    if (e.target.value === "Update") {
      Player(name);
      Stats(name);
      setStored(name);
    } else {
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
              <Input
                id="updateBtn"
                type="button"
                value="Update"
                onClick={handleChange}
              />
            </div>
          </FormGroup>
        </Form>
        <div className="col">
          <div className="displayName">
            <h4>
              Displaying info for Chess.com user: <strong>{stored}</strong> (Last 30 Days)
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

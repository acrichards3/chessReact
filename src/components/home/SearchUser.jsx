import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./searchUser.css";

export default function SearchUser() {
  return (
    <div className="container">
      <div className="row">
        <Form>
          <FormGroup>
            <div className="col-lg-4 bar">
              <Input placeholder="Chess.com Username" />
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

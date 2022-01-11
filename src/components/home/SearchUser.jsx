import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./searchUser.css";

export default function SearchUser() {
  return (
    <div className="chessUser">
      <Form>
        <FormGroup>
          <Label>Username</Label>
          <Input
            className="chessUser"
            bsSize="lg"
            autoComplete="off"
            name="chessUsername"
            id="chessUsername"
            placeholder="Enter Chess.com Username"
          />
          <Button type="submit" color="primary">
            Search
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

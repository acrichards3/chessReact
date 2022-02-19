import React, { useState} from 'react';
import {
  Form,
  FormGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './searchUser.css';

export default function SearchUser(props) {
  const [drop, setDrop] = useState(false);
  const [stored, setStored] = useState('Hikaru')

  function handleChange(e) {
    if (e.target.value === 'Update') {
      props.updateStats(props.name);
      setStored(props.name);
    } else {
      props.setName(e.target.value);
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  const toggleDropdown = () => {
    setDrop((prevState) => !prevState);
  };

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
        <div className="row">
          <div className="col timeClass">
            <Dropdown isOpen={drop} toggle={toggleDropdown}>
              <DropdownToggle caret> {props.timeState} </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  id="overalRating"
                  onClick={() => props.setTimeState('Overall')}
                >
                  Overall
                </DropdownItem>
                <DropdownItem
                  id="rapidRating"
                  onClick={() => props.setTimeState('Rapid')}
                >
                  Rapid
                </DropdownItem>
                <DropdownItem
                  id="blitzRating"
                  onClick={() => props.setTimeState('Blitz')}
                >
                  Blitz
                </DropdownItem>
                <DropdownItem
                  id="bulletRating"
                  onClick={() => props.setTimeState('Bullet')}
                >
                  Bullet
                </DropdownItem>
                <DropdownItem
                  id="dailyRating"
                  onClick={() => props.setTimeState('Daily')}
                >
                  Daily
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="displayName">
              <h4>
                Displaying info for Chess.com user: <strong>{stored}</strong>{' '}
                (Last 90 Days)
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

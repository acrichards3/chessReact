import React, { useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Player from '../../data/setPlayer';
import Stats from '../../data/getStats';
import Openings from '../../data/getOpenings';
import './searchUser.css';

export default function SearchUser() {
  const [name, setName] = useState('Hikaru');
  const [stored, setStored] = useState('Hikaru');
  const [timeClass, setTimeClass] = useState('Overall');
  const [drop, setDrop] = useState(false);

  function updateTimeClass() {

    let timeClassName = '';
    switch (timeClass) {
      case 'Rapid':
        timeClassName = 'rapidRating';
        break;
      case 'Blitz':
        timeClassName = 'blitzRating';
        break;
      case 'Bullet':
        timeClassName = 'bulletRating';
        break;
      case 'Daily':
        timeClassName = 'dailyRating';
        break;
      default:
        timeClassName = 'overallRating';
    }
    return timeClassName;
  }

  updateTimeClass();

  useEffect(() => {
    Player(name);
    Stats(name);
    Openings(name);
    setStored(name);
  }, [])

  function handleChange(e) {
    if (e.target.value === 'Update') {
      Player(name);
      Stats(name);
      Openings(name);
      setStored(name);
    } else {
      setName(e.target.value);
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
              <DropdownToggle caret> {timeClass} </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  id="overalRating"
                  onClick={() => setTimeClass('Overall')}
                >
                  Overall
                </DropdownItem>
                <DropdownItem
                  id="rapidRating"
                  onClick={() => setTimeClass('Rapid')}
                >
                  Rapid
                </DropdownItem>
                <DropdownItem
                  id="blitzRating"
                  onClick={() => setTimeClass('Blitz')}
                >
                  Blitz
                </DropdownItem>
                <DropdownItem
                  id="bulletRating"
                  onClick={() => setTimeClass('Bullet')}
                >
                  Bullet
                </DropdownItem>
                <DropdownItem
                  id="dailyRating"
                  onClick={() => setTimeClass('Daily')}
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

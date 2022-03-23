import React from 'react';
import { Accordion } from 'react-bootstrap';
import TEXT from './TEXT';
import './allPrinciples.css';

export default function Top10() {
  return (
    <div className="row accord">
      <Accordion>
        {TEXT[3].titles.map((element, i) => {
          return (
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{TEXT[3].titles[i]}</Accordion.Header>
              <Accordion.Body>{TEXT[3].descriptions[i]}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

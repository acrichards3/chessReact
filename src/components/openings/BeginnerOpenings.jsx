import React from 'react';
import { Card } from '@blueprintjs/core';
import { Button } from 'reactstrap';
import './openings.css';

export default function BeginnerOpenings() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Card elevation="2">
            <h2 className="title">Italian Game</h2>
            <iframe
              id="8672741"
              className="board"
              title="italian"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672741"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Italian-Game"
              block
            >
              Learn This Opening
            </Button>
          </Card>
        </div>
        <div className="col">
          <Card elevation="2">
            <h2 className="title">London System</h2>
            <iframe
              id="8672827"
              title='london'
              className="board"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672827"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/London-System"
              block
            >
              Learn This Opening
            </Button>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <br />
          <Card className="card" elevation="2">
            <h2 className="title">Traxler Counter Attack</h2>
            <iframe
              id="8672827"
              title='traxler'
              className="board"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672837"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Italian-Game-Traxler-Counterattack"
              block
            >
              Learn This Opening
            </Button>
          </Card>
          <br />
        </div>
        <div className="col">
          <br />
          <Card className="card" elevation="2">
            <h2 className="title">Dutch Defense</h2>
            <iframe
              id="8672827"
              title='dutch'
              className="board"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672831"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Dutch-Defense"
              block
            >
              Learn This Opening
            </Button>
          </Card>
          <br />
        </div>
      </div>
    </div>
  );
}

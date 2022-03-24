import React from 'react';
import { Card } from '@blueprintjs/core';
import { Button } from 'reactstrap';
import './openings.css';

export default function IntermediateOpenings() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Card elevation="2">
            <h2 className="title">Ruy Lopez Opening</h2>
            <iframe
              id="8672741"
              className="board"
              title="lopez"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672925"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Ruy-Lopez-Opening"
              block
            >
              Learn This Opening
            </Button>
          </Card>
        </div>
        <div className="col">
          <Card elevation="2">
            <h2 className="title">Vienna Game</h2>
            <iframe
              id="8672827"
              title="vienna"
              className="board"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672929"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Vienna-Game"
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
            <h2 className="title">Caro-Kann Defense</h2>
            <iframe
              id="8672827"
              title="kann"
              className="board"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672933"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Caro-Kann-Defense"
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
            <h2 className="title">King's Indian Defense</h2>
            <iframe
              id="8672827"
              title="kIndian"
              className="board"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672935"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Kings-Indian-Defense"
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

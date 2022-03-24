import React from 'react';
import { Card } from '@blueprintjs/core';
import { Button } from 'reactstrap';
import './openings.css';

export default function AdvancedOpenings() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Card elevation="2">
            <h2 className="title">Queen's Gambit</h2>
            <iframe
              id="8672741"
              className="board"
              title="queens"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672939"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Queens-Gambit"
              block
            >
              Learn This Opening
            </Button>
          </Card>
        </div>
        <div className="col">
          <Card elevation="2">
            <h2 className="title">Tromposky Attack</h2>
            <iframe
              id="8672827"
              title="tromposky"
              className="board"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672941"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Trompowsky-Attack"
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
            <h2 className="title">Sicilian Defense</h2>
            <iframe
              id="8672827"
              title="sicilian"
              className="board"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672943"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Sicilian-Defense"
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
            <h2 className="title">Queen's Gambit: Declined</h2>
            <iframe
              id="8672827"
              title="queensDeclined"
              className="board"
              allowtransparency="true"
              frameborder="0"
              src="//www.chess.com/emboard?id=8672945"
            ></iframe>
            <Button
              className="footer"
              color="primary"
              size="lg"
              href="https://www.chess.com/openings/Queens-Gambit#queens-gambit-declined"
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

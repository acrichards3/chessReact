import React from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import './rank.css';

export default function Rank() {
  return (
    <div>
      <div className="container">
        <Card body outline color="secondary">
          <CardHeader>Current Rank</CardHeader>
          <CardBody>
            <CardFooter>
              <Button color="primary" size="lg" block>
                View More
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

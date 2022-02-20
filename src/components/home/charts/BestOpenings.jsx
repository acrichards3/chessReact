import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

export default function BestOpenings() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card body outline color="secondary" className="text-center">
              <CardHeader tag="h4">Best Openings</CardHeader>
              <CardBody>
              <VictoryChart polar height={450}>
                <VictoryBar />
              </VictoryChart>
                <CardFooter>
                  <Button color="primary" className="viewMore" size="lg" block>
                    View More
                  </Button>
                </CardFooter>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

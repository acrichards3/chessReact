import React from 'react';
import { VictoryChart, VictoryBar, VictoryPolarAxis } from 'victory';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

export default function MostPlayedOpenings() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card body outline color="secondary" className="text-center">
              <CardHeader tag="h4">Most Played Openings</CardHeader>
              <CardBody>
                <VictoryChart polar height={450}>
                  <VictoryPolarAxis
                    dependentAxis
                    style={{ axis: { stroke: 'none' } }}
                    tickFormat={() => null}
                  />
                  <VictoryPolarAxis />
                  <VictoryBar
                    data={[
                      { x: 'Kings Pawn Opening', y: 1 },
                      { x: 'Karo Cann Defense', y: 2 },
                      { x: 'Sicilian Defense', y: 4 },
                      { x: 'Italian Game', y: 3 },
                      { x: 'Tromposky Attack', y: 7 },
                    ]}
                    style={{
                      data: {
                        fill: '#616161',
                        stroke: 'black',
                        strokeWidth: 2,
                      },
                    }}
                    labels={null}
                  />
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

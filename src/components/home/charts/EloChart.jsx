import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import './eloChart.css';

export default function EloChart() {
  return (
    <div>
      <div className="container">
        <Card body outline color="secondary" className="text-center">
          <CardHeader tag="h4">Elo Change (Last 10 Games)</CardHeader>
          <CardBody>
            <VictoryChart height={400}>
              <VictoryLine
                data={[
                  { x: 1, y: 840 },
                  { x: 2, y: 848 },
                  { x: 3, y: 853 },
                  { x: 4, y: 849 },
                  { x: 5, y: 860 },
                  { x: 6, y: 865 },
                  { x: 7, y: 867 },
                  { x: 8, y: 860 },
                  { x: 9, y: 868 },
                  { x: 10, y: 876 },
                ]}
                interpolation="natural"
                style={{
                  data: {
                    stroke: '#1261A0',
                  },
                }}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1500 },
                }}
              ></VictoryLine>
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
  );
}

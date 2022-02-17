import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import './eloChart.css';

export default function EloChart(props) {
  const eloChange = (rating) => {
    if (rating) {
      if (rating.length < 50) {
        return rating.map((num, index) => ({ x: index + 1, y: num }));
      } else {
        return rating.reverse().slice(0, 50).map((num, index) => ({ x: index + 1, y: num }));
      }
    }
  };

  console.log(eloChange(props.stats), 'KING HAROLD WUZ HERE');

  return (
    <div>
      <div className="container">
        <Card body outline color="secondary" className="text-center">
          <CardHeader tag="h4">Elo Change</CardHeader>
          <CardBody>
            <VictoryChart height={450}>
              <VictoryLine
                data={eloChange(props.stats)}
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

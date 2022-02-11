import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import Stats from '../../../data/getStats';
import './eloChart.css';

export default function EloChart() {
  const [stats, setStats] = useState(Stats());

  const eloChange = async (timeClassRating) => {
    const change = [];
    if (await stats.timeClassRating) {
      if (stats.length < 50) {
        change.map((num) => {
          return { x: change.indexOf(num) + 1, y: change.num };
        });
      } else {
        change.map((num) => {
          if (num < 50) {
            return { x: change.indexOf(num) + 1, y: change.num };
          }
        });
      }
    }
    return change;
  };

  useEffect(() => {
    Stats();
  }, []);

  return (
    <div>
      <div className="container">
        <Card body outline color="secondary" className="text-center">
          <CardHeader tag="h4">Elo Change</CardHeader>
          <CardBody>
            <VictoryChart height={450}>
              <VictoryLine
                data={[{ x: 1, y: 13}]}
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

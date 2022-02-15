import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import Stats from '../../../data/getStats';
import './eloChart.css';

export default function EloChart(props) {
  const [stats, setStats] = useState();

  
  useEffect(() => {
    async function updateStats(user) {
      const results = Stats(user);
  
      console.log('WHYYYYYYYYYYYYYY', results);
  
      switch (props.timeState) {
        case 'Rapid' || 'Overall':
          setStats(results.rapidRating);
          break;
        case 'Blitz':
          setStats(results.blitzRating);
          break;
        case 'Bullet':
          setStats(results.bulletRating);
          break;
        case 'Daily':
          setStats(results.dailyRating);
          break;
        default: 
          setStats(null);
      }
    }
    updateStats(props.name);
  }, [props.timeState, props.name])


  const eloChange = (rating) => {
    if (rating) {
      if (rating.length < 50) {
        return rating.map((num, index) => ({ x: index + 1, y: num }));
      } else {
        return rating.reverse.slice(0, 50).map((num, index) => ({ x: index + 1, y: num }));
      }
    }
  };

  return (
    <div>
      <div className="container">
        <Card body outline color="secondary" className="text-center">
          <CardHeader tag="h4">Elo Change</CardHeader>
          <CardBody>
            <VictoryChart height={450}>
              <VictoryLine
                data={eloChange(stats)}
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

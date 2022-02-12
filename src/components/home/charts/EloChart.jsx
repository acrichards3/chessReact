import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import Stats from '../../../data/getStats';
import { handleDropdownEvent } from '../SearchUser';
import './eloChart.css';

export default function EloChart() {
  const [stats, setStats] = useState();
  const [timeClass, setTimeClass] = useState('Overall');

  useEffect(() => {
    setTimeClass(handleDropdownEvent());
    updateStats();
  }, [handleDropdownEvent()]);

  async function updateStats() {
    const results = await Stats();

    switch (timeClass) {
      case 'Rapid':
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
      case 'Overall':
        setStats(results.rapidRating);
        break;
    }
    return stats;
  }

  const eloChange = () => {
    if (stats) {
      if (stats.length < 50) {
        return stats.map((num) => {
          return { x: stats.indexOf(num) + 1, y: stats.num };
        });
      } else {
        return stats.map((num) => {
          if (num < 50) {
            return { x: stats.indexOf(num) + 1, y: stats.num };
          }
        });
      }
    }
  };

  console.log(eloChange());

  return (
    <div>
      <div className="container">
        <Card body outline color="secondary" className="text-center">
          <CardHeader tag="h4">Elo Change</CardHeader>
          <CardBody>
            <VictoryChart height={450}>
              <VictoryLine
                data={eloChange()}
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

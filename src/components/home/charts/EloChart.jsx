import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import './eloChart.css';

export default function EloChart(props) {

<<<<<<< HEAD
  //console.log(props.stats, 'WHAT IS THIS???????');
=======
  //console.log(props.stats, 'WHAT IS THIS???????'); 
>>>>>>> 6ba50fb5862f7fb65d8db25fbf633553d1854a11
  
  const eloChange = (rating) => {
    if (rating) {
      if (rating.length < 100) {
        return rating.map((num, index) => ({ x: index + 1, y: num }));
      } else {
        return rating.reverse().slice(0, 100).map((num, index) => ({ x: index + 1, y: num }));
      }
    }
  };

  //console.log(eloChange(props.stats), 'KING HAROLD WUZ HERE');

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

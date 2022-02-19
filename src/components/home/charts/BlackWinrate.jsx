import React from 'react';
import { VictoryPie } from 'victory';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

export default function BlackWinrate(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card body outline color="secondary" className="text-center">
              <CardHeader tag="h4">Winrate as Black</CardHeader>
              <CardBody>
                <VictoryPie
                  data={props.blackInfo}
                  colorScale={['#3c89d0', '#ff2626', 'grey']}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1500 },
                  }}
                />
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

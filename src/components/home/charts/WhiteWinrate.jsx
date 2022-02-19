import React from 'react';
import { VictoryPie } from 'victory';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

export default function WhiteWinrate(props) {



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card body outline color="secondary" className="text-center">
              <CardHeader tag="h4">Winrate as White</CardHeader>
              <CardBody>
                <VictoryPie
                  data={props.whiteInfo}
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

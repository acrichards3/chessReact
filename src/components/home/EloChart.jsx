import React from 'react'
import { VictoryChart, VictoryLine } from 'victory';

export default function EloChart() {
  return (
    <div>
      <VictoryChart>
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
              stroke: "#1261A0",
            },
          }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1500 },
          }}
        ></VictoryLine>
      </VictoryChart>
    </div>
  );
}

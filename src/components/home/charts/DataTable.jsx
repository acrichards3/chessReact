import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable(props) {
  const rows = () => {
    const data = props.openingInfo;

    if (data) {
      if (props.timeState === 'Rapid') {
        return data.map((value, index) => {
          return {
            id: data[index].id,
            openings: data[index].name,
            gamesPlayed: data[index].rapidGames + data[index].rapidDraws,
            white: data[index].rapidGamesWhite,
            black: data[index].rapidGamesBlack,
            wins: data[index].rapidWins,
            losses: data[index].rapidLosses,
            draws: data[index].rapidDraws,
            winrate:
              (data[index].rapidWins / data[index].rapidGames).toFixed(2) *
                100 +
              '%',
          };
        });
      } else if (props.timeState === 'Blitz') {
        return data.map((value, index) => {
          return {
            id: data[index].id,
            openings: data[index].name,
            gamesPlayed: data[index].blitzGames + data[index].blitzDraws,
            white: data[index].blitzGamesWhite,
            black: data[index].blitzGamesBlack,
            wins: data[index].blitzWins,
            losses: data[index].blitzLosses,
            draws: data[index].blitzDraws,
            winrate:
              (data[index].blitzWins / data[index].blitzGames).toFixed(2) *
                100 +
              '%',
          };
        });
      } else if (props.timeState === 'Bullet') {
        return data.map((value, index) => {
          return {
            id: data[index].id,
            openings: data[index].name,
            gamesPlayed: data[index].bulletGames + data[index].bulletDraws,
            white: data[index].bulletGamesWhite,
            black: data[index].bulletGamesBlack,
            wins: data[index].bulletWins,
            losses: data[index].bulletLosses,
            draws: data[index].bulletDraws,
            winrate:
              (data[index].bulletWins / data[index].bulletGames).toFixed(2) *
                100 +
              '%',
          };
        });
      } else if (props.timeState === 'Daily') {
        return data.map((value, index) => {
          return {
            id: data[index].id,
            openings: data[index].name,
            gamesPlayed: data[index].dailyGames + data[index].dailyDraws,
            white: data[index].dailyGamesWhite,
            black: data[index].dailyGamesBlack,
            wins: data[index].dailyWins,
            losses: data[index].dailyLosses,
            draws: data[index].dailyDraws,
            winrate:
              (data[index].dailyWins / data[index].dailyGames).toFixed(2) *
                100 +
              '%',
          };
        });
      } else {
        return data.map((value, index) => {
          return {
            id: data[index].id,
            openings: data[index].name,
            gamesPlayed: data[index].count + data[index].draws,
            white: data[index].whiteCount,
            black: data[index].blackCount,
            wins: data[index].wins,
            losses: data[index].losses,
            draws: data[index].draws,
            winrate:
              (data[index].wins / data[index].count).toFixed(2) * 100 + '%',
          };
        });
      }
    }
  };

  const columns = [
    { field: 'openings', headerName: 'Openings', width: 300 },
    { field: 'gamesPlayed', headerName: 'Total Games', width: 150 },
    { field: 'white', headerName: 'White Games', width: 100 },
    { field: 'black', headerName: 'Black Games', width: 100 },
    { field: 'wins', headerName: 'Wins', width: 100 },
    { field: 'losses', headerName: 'Losses', width: 100 },
    { field: 'draws', headerName: 'Draws', width: 100 },
    { field: 'winrate', headerName: 'Winrate', width: 100 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows()} columns={columns} />
    </div>
  );
}

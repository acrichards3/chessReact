import { OPENINGS } from './openings';
const ChessWebAPI = require('chess-web-api');
const chessAPI = new ChessWebAPI();

export default function Openings(user) {
  chessAPI
    .getPlayerMonthlyArchives(user)
    .then(async function (response) {
      const arr = response.body.archives;
      const recents = [];
      const results = [];

      for (let i = 0; i < arr.length; i++) {
        if (
          i === arr.length - 1 ||
          i === arr.length - 2 ||
          i === arr.length - 3
        ) {
          recents.push(arr[i]);
        }
      }

      async function getJson(num) {
        const response = await fetch(recents[num]);
        return await response.json();
      }

      for (let i = 0; i < recents.length; i++) {
        results.push(getJson(i));
      }

      const games1 = (await results[0]).games.concat((await results[1]).games);
      const games2 = games1.concat((await results[2]).games);
      return games2;
    })
    .then(function (games) {
      for (let i = 0; i < games.length; i++) {
        const currentGame = games[i];
        const currentGamePgn = games[i].pgn;
        const blackUser = games[i].black.username;
        const whiteUser = games[i].white.username;

        const increaseCount = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].count += 1;
        };

        const increaseWhiteCount = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].whiteCount += 1;
        };

        const increaseBlackCount = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].blackCount += 1;
        };

        const increaseWins = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].wins += 1;
        };

        const increaseLosses = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].losses += 1;
        };

        const increaseDraws = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].draws += 1;
        };

        const increaseRapidGames = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].rapidGames += 1;
        };

        const increaseBlitzGames = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].blitzGames += 1;
        };

        const increaseBulletGames = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].bulletGames += 1;
        };

        const increaseDailyGames = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].dailyGames += 1;
        };

        const increaseRapidWins = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].rapidWins += 1;
        };

        const increaseRapidLosses = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].rapidLosses += 1;
        };

        const increaseRapidDraws = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].rapidDraws += 1;
        };

        const increaseBlitzWins = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].blitzWins += 1;
        };

        const increaseBlitzLosses = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].blitzLosses += 1;
        };

        const increaseBlitzDraws = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].blitzDraws += 1;
        };

        const increaseBulletWins = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].bulletWins += 1;
        };

        const increaseBulletLosses = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].bulletLosses += 1;
        };

        const increaseBulletDraws = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].bulletDraws += 1;
        };

        const increaseDailyWins = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].dailyWins += 1;
        };

        const increaseDailyLosses = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].dailyLosses += 1;
        };

        const increaseDailyDraws = (num) => {
          const getIndex = OPENINGS.findIndex((x) => x.id === num);
          OPENINGS[getIndex].dailyDraws += 1;
        };

        if (blackUser === user && currentGame.rated) {
          if (currentGamePgn.includes('Sicilian')) {
            console.log('SUCCESS');
            increaseCount(10);
          } else {
            console.log('FAILED');
          }
        }

        if (whiteUser === user && currentGame.rated) {
          if (currentGamePgn.includes('Sicilian')) {
            console.log('SUCCESS');
            increaseCount(10);
          } else {
            console.log('FAILED');
          }
        }
      }
      console.log('COUNT', OPENINGS.find((x) => x.id === 10).count);
      console.log(OPENINGS);
    })
    .catch(function (err) {
      console.log(err);
    });
}

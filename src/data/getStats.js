const ChessWebAPI = require('chess-web-api');
const chessAPI = new ChessWebAPI();

export default function Stats(user) {
  console.log('SHAGGY', user);
  return chessAPI
    .getPlayerMonthlyArchives(user)
    .then(async function (response) {
      const arr = await response.body.archives;
      const recents = [];
      const results = [];

      if (!arr) {
        console.log('user doesnt exist');
        return;
      }

      for (let i = 0; i < arr.length; i++) {
        if (
          i === arr.length - 1 ||
          i === arr.length - 2 ||
          i === arr.length - 3
        ) {
          recents.push(arr[i]);
        }
      }

      async function getJson() {
        for (let i = 0; i < recents.length; i++) {
          const response = await fetch(recents[i]);
          const jsonResponse = await response.json();
          results.push(...jsonResponse.games);
        }
        //console.log(results, 'RUH ROH RAGGY');
        return results;
      }

      return getJson();
    })
    .then(function (games) {
      const obj = {
        rapidRating: [],
        blitzRating: [],
        bulletRating: [],
        dailyRating: [],

        blackGamesPlayedOverall: 0,
        whiteGamesPlayedOverall: 0,
        blackWinsOverall: 0,
        blackDrawsOverall: 0,
        whiteWinsOverall: 0,
        whiteDrawsOverall: 0,

        blackGamesPlayedRapid: 0,
        whiteGamesPlayedRapid: 0,
        blackWinsRapid: 0,
        blackDrawsRapid: 0,
        whiteWinsRapid: 0,
        whiteDrawsRapid: 0,

        blackGamesPlayedBlitz: 0,
        whiteGamesPlayedBlitz: 0,
        blackWinsBlitz: 0,
        blackDrawsBlitz: 0,
        whiteWinsBlitz: 0,
        whiteDrawsBlitz: 0,

        blackGamesPlayedBullet: 0,
        whiteGamesPlayedBullet: 0,
        blackWinsBullet: 0,
        blackDrawsBullet: 0,
        whiteWinsBullet: 0,
        whiteDrawsBullet: 0,

        blackGamesPlayedDaily: 0,
        whiteGamesPlayedDaily: 0,
        blackWinsDaily: 0,
        blackDrawsDaily: 0,
        whiteWinsDaily: 0,
        whiteDrawsDaily: 0,

        numOfGames: 0,
      };

      //console.log('ALL GAMES', games);

      for (let i = 0; i < games.length; i++) {
        const currentGame = games[i];
        const blackRating = games[i].black.rating;
        const whiteRating = games[i].white.rating;
        const blackResult = games[i].black.result;
        const whiteResult = games[i].white.result;
        const blackUser = games[i].black.username;
        const whiteUser = games[i].white.username;

        const checkDraw = (colorResult, timeClass) => {
          if (
            (colorResult === 'agreed' &&
              currentGame.time_class === timeClass) ||
            (colorResult === 'repetition' &&
              currentGame.time_class === timeClass) ||
            (colorResult === 'stalemate' &&
              currentGame.time_class === timeClass) ||
            (colorResult === 'insufficient' &&
              currentGame.time_class === timeClass) ||
            (colorResult === '50move' &&
              currentGame.time_class === timeClass) ||
            (colorResult === 'timevsinsufficient' &&
              currentGame.time_class === timeClass)
          ) {
            return true;
          }
        };

        if (
          blackUser.toUpperCase() === user.toUpperCase() &&
          currentGame.rated
        ) {
          // checks if user played as black and if game is rated
          obj.blackGamesPlayedOverall++;
          obj.numOfGames++;
          if (currentGame.time_class === 'rapid') {
            obj.blackGamesPlayedRapid++;
            obj.rapidRating.push(blackRating);
          } else if (currentGame.time_class === 'blitz') {
            obj.blackGamesPlayedBlitz++;
            obj.blitzRating.push(blackRating);
          } else if (currentGame.time_class === 'bullet') {
            obj.blackGamesPlayedBullet++;
            obj.bulletRating.push(blackRating);
          } else if (currentGame.time_class === 'daily') {
            obj.blackGamesPlayedDaily++;
            obj.dailyRating.push(blackRating);
          }

          if (blackResult === 'win') {
            obj.blackWinsOverall++;
          }
          if (blackResult === 'win' && currentGame.time_class === 'rapid') {
            obj.blackWinsRapid++;
          } else if (
            blackResult === 'win' &&
            currentGame.time_class === 'blitz'
          ) {
            obj.blackWinsBlitz++;
          } else if (
            blackResult === 'win' &&
            currentGame.time_class === 'bullet'
          ) {
            obj.blackWinsBullet++;
          } else if (
            blackResult === 'win' &&
            currentGame.time_class === 'daily'
          ) {
            obj.blackWinsDaily++;
          }

          if (checkDraw(blackResult, 'rapid')) {
            obj.blackDrawsRapid++;
            obj.blackDrawsOverall++;
          } else if (checkDraw(blackResult, 'blitz')) {
            obj.blackDrawsBlitz++;
            obj.blackDrawsOverall++;
          } else if (checkDraw(blackResult, 'bullet')) {
            obj.blackDrawsBullet++;
            obj.blackDrawsOverall++;
          } else if (checkDraw(blackResult, 'daily')) {
            obj.blackDrawsDaily++;
            obj.blackDrawsOverall++;
          }
        }
        if (
          whiteUser.toUpperCase() === user.toUpperCase() &&
          currentGame.rated
        ) {
          // checks if user played as white and if game is rated
          obj.whiteGamesPlayedOverall++;
          obj.numOfGames++;
          if (currentGame.time_class === 'rapid') {
            obj.whiteGamesPlayedRapid++;
            obj.rapidRating.push(whiteRating);
          } else if (currentGame.time_class === 'blitz') {
            obj.whiteGamesPlayedBlitz++;
            obj.blitzRating.push(whiteRating);
          } else if (currentGame.time_class === 'bullet') {
            obj.whiteGamesPlayedBullet++;
            obj.bulletRating.push(whiteRating);
          } else if (currentGame.time_class === 'daily') {
            obj.whiteGamesPlayedDaily++;
            obj.dailyRating.push(whiteRating);
          }

          if (whiteResult === 'win') {
            obj.whiteWinsOverall++;
          }
          if (whiteResult === 'win' && currentGame.time_class === 'rapid') {
            obj.whiteWinsRapid++;
          } else if (
            whiteResult === 'win' &&
            currentGame.time_class === 'blitz'
          ) {
            obj.whiteWinsBlitz++;
          } else if (
            whiteResult === 'win' &&
            currentGame.time_class === 'bullet'
          ) {
            obj.whiteWinsBullet++;
          } else if (
            whiteResult === 'win' &&
            currentGame.time_class === 'daily'
          ) {
            obj.whiteWinsDaily++;
          }

          if (checkDraw(whiteResult, 'rapid')) {
            obj.whiteDrawsRapid++;
            obj.whiteDrawsOverall++;
          } else if (checkDraw(whiteResult, 'blitz')) {
            obj.whiteDrawsBlitz++;
            obj.whiteDrawsOverall++;
          } else if (checkDraw(whiteResult, 'bullet')) {
            obj.whiteDrawsBullet++;
            obj.whiteDrawsOverall++;
          } else if (checkDraw(whiteResult, 'daily')) {
            obj.whiteDrawsDaily++;
            obj.whiteDrawsOverall++;
          }
        }
      }

      const winrates = {
        blackWinRateOverall: (
          (obj.blackWinsOverall / obj.blackGamesPlayedOverall) *
          100
        ).toFixed(2),
        whiteWinRateOverall: (
          (obj.whiteWinsOverall / obj.whiteGamesPlayedOverall) *
          100
        ).toFixed(2),
        blackLossesOverall: obj.blackGamesPlayedOverall - obj.blackWinsOverall,
        whiteLossesOverall: obj.whiteGamesPlayedOverall - obj.whiteWinsOverall,

        blackWinRateRapid: (
          (obj.blackWinsRapid / obj.blackGamesPlayedRapid) *
          100
        ).toFixed(2),
        whiteWinRateRapid: (
          (obj.whiteWinsRapid / obj.whiteGamesPlayedRapid) *
          100
        ).toFixed(2),
        blackLossesRapid: obj.blackGamesPlayedRapid - obj.blackWinsRapid,
        whiteLossesRapid: obj.whiteGamesPlayedRapid - obj.whiteWinsRapid,

        blackWinRateBlitz: (
          (obj.blackWinsBlitz / obj.blackGamesPlayedBlitz) *
          100
        ).toFixed(2),
        whiteWinRateBlitz: (
          (obj.whiteWinsBlitz / obj.whiteGamesPlayedBlitz) *
          100
        ).toFixed(2),
        blackLossesBlitz: obj.blackGamesPlayedBlitz - obj.blackWinsBlitz,
        whiteLossesBlitz: obj.whiteGamesPlayedBlitz - obj.whiteWinsBlitz,

        blackWinRateBullet: (
          (obj.blackWinsBullet / obj.blackGamesPlayedBullet) *
          100
        ).toFixed(2),
        whiteWinRateBullet: (
          (obj.whiteWinsBullet / obj.whiteGamesPlayedBullet) *
          100
        ).toFixed(2),
        blackLossesBullet: obj.blackGamesPlayedBullet - obj.blackWinsBullet,
        whiteLossesBullet: obj.whiteGamesPlayedBullet - obj.whiteWinsBullet,

        blackWinRateDaily: (
          (obj.blackWinsDaily / obj.blackGamesPlayedDaily) *
          100
        ).toFixed(2),
        whiteWinRateDaily: (
          (obj.whiteWinsDaily / obj.whiteGamesPlayedDaily) *
          100
        ).toFixed(2),
        blackLossesDaily: obj.blackGamesPlayedDaily - obj.blackWinsDaily,
        whiteLossesDaily: obj.whiteGamesPlayedDaily - obj.whiteWinsDaily,
      };

      const information = [obj, winrates];

      //console.log('STATS DATA', information);

      return information;
    })
    .catch(function (err) {
      console.log('hellllllllllo', err);
    });
}

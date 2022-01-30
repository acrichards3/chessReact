const ChessWebAPI = require('chess-web-api');
const chessAPI = new ChessWebAPI();

export default function Stats(user) {
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
      const rapidRating = [];
      const blitzRating = [];
      const bulletRating = [];
      const dailyRating = [];
      const numOfGames = games.length;

      let blackGamesPlayedOverall = 0;
      let whiteGamesPlayedOverall = 0;
      let blackWinsOverall = 0;
      let blackDrawsOverall = 0;
      let whiteWinsOverall = 0;
      let whiteDrawsOverall = 0;

      let blackGamesPlayedRapid = 0;
      let whiteGamesPlayedRapid = 0;
      let blackWinsRapid = 0;
      let blackDrawsRapid = 0;
      let whiteWinsRapid = 0;
      let whiteDrawsRapid = 0;

      let blackGamesPlayedBlitz = 0;
      let whiteGamesPlayedBlitz = 0;
      let blackWinsBlitz = 0;
      let blackDrawsBlitz = 0;
      let whiteWinsBlitz = 0;
      let whiteDrawsBlitz = 0;

      let blackGamesPlayedBullet = 0;
      let whiteGamesPlayedBullet = 0;
      let blackWinsBullet = 0;
      let blackDrawsBullet = 0;
      let whiteWinsBullet = 0;
      let whiteDrawsBullet = 0;

      let blackGamesPlayedDaily = 0;
      let whiteGamesPlayedDaily = 0;
      let blackWinsDaily = 0;
      let blackDrawsDaily = 0;
      let whiteWinsDaily = 0;
      let whiteDrawsDaily = 0;

      console.log(games);

      for (let i = 0; i < games.length; i++) {
        const currentGame = games[i];
        const blackRating = games[i].black.rating;
        const whiteRating = games[i].white.rating;
        const blackResult = games[i].black.result;
        const whiteResult = games[i].white.result;
        const blackUser = games[i].black.username;
        const whiteUser = games[i].white.username;

        if (blackUser === user && currentGame.rated) {
          // checks if user played as black and if game is rated
          blackGamesPlayedOverall++;
          if (currentGame.time_class === 'rapid') {
            blackGamesPlayedRapid++;
            rapidRating.push(blackRating);
          } else if (currentGame.time_class === 'blitz') {
            blackGamesPlayedBlitz++;
            blitzRating.push(blackRating);
          } else if (currentGame.time_class === 'bullet') {
            blackGamesPlayedBullet++;
            bulletRating.push(blackRating);
          } else if (currentGame.time_class === 'daily') {
            blackGamesPlayedDaily++;
            dailyRating.push(blackRating);
          }

          if (blackResult === 'win') {
            blackWinsOverall++;
          }
          if (blackResult === 'win' && currentGame.time_class === 'rapid') {
            blackWinsRapid++;
          } else if (
            blackResult === 'win' &&
            currentGame.time_class === 'blitz'
          ) {
            blackWinsBlitz++;
          } else if (
            blackResult === 'win' &&
            currentGame.time_class === 'bullet'
          ) {
            blackWinsBullet++;
          } else if (
            blackResult === 'win' &&
            currentGame.time_class === 'daily'
          ) {
            blackWinsDaily++;
          }

          if (
            blackResult === 'agreed' ||
            blackResult === 'repetition' ||
            blackResult === 'stalemate' ||
            blackResult === 'insufficient' ||
            blackResult === '50move' ||
            blackResult === 'timevsinsufficient'
          ) {
            blackDrawsOverall++;
          }
          if (
            (blackResult === 'agreed' && currentGame.time_class === 'rapid') ||
            (blackResult === 'repetition' &&
              currentGame.time_class === 'rapid') ||
            (blackResult === 'stalemate' &&
              currentGame.time_class === 'rapid') ||
            (blackResult === 'insufficient' &&
              currentGame.time_class === 'rapid') ||
            (blackResult === '50move' && currentGame.time_class === 'rapid') ||
            (blackResult === 'timevsinsufficient' &&
              currentGame.time_class === 'rapid')
          ) {
            blackDrawsRapid++;
          } else if (
            (blackResult === 'agreed' && currentGame.time_class === 'blitz') ||
            (blackResult === 'repetition' &&
              currentGame.time_class === 'blitz') ||
            (blackResult === 'stalemate' &&
              currentGame.time_class === 'blitz') ||
            (blackResult === 'insufficient' &&
              currentGame.time_class === 'blitz') ||
            (blackResult === '50move' && currentGame.time_class === 'blitz') ||
            (blackResult === 'timevsinsufficient' &&
              currentGame.time_class === 'blitz')
          ) {
            blackDrawsBlitz++;
          } else if (
            (blackResult === 'agreed' && currentGame.time_class === 'bullet') ||
            (blackResult === 'repetition' &&
              currentGame.time_class === 'bullet') ||
            (blackResult === 'stalemate' &&
              currentGame.time_class === 'bullet') ||
            (blackResult === 'insufficient' &&
              currentGame.time_class === 'bullet') ||
            (blackResult === '50move' && currentGame.time_class === 'bullet') ||
            (blackResult === 'timevsinsufficient' &&
              currentGame.time_class === 'bullet')
          ) {
            blackDrawsBullet++;
          } else if (
            (blackResult === 'agreed' && currentGame.time_class === 'daily') ||
            (blackResult === 'repetition' &&
              currentGame.time_class === 'daily') ||
            (blackResult === 'stalemate' &&
              currentGame.time_class === 'daily') ||
            (blackResult === 'insufficient' &&
              currentGame.time_class === 'daily') ||
            (blackResult === '50move' && currentGame.time_class === 'daily') ||
            (blackResult === 'timevsinsufficient' &&
              currentGame.time_class === 'daily')
          ) {
            blackDrawsDaily++;
          }
        }
        if (whiteUser === user && currentGame.rated) {
          // checks if user played as white and if game is rated
          whiteGamesPlayedOverall++;
          if (currentGame.time_class === 'rapid') {
            whiteGamesPlayedRapid++;
            rapidRating.push(whiteRating);
          } else if (currentGame.time_class === 'blitz') {
            whiteGamesPlayedBlitz++;
            blitzRating.push(whiteRating);
          } else if (currentGame.time_class === 'bullet') {
            whiteGamesPlayedBullet++;
            bulletRating.push(whiteRating);
          } else if (currentGame.time_class === 'daily') {
            whiteGamesPlayedDaily++;
            dailyRating.push(whiteRating);
          }

          if (whiteResult === 'win') {
            whiteWinsOverall++;
          }
          if (whiteResult === 'win' && currentGame.time_class === 'rapid') {
            whiteWinsRapid++;
          } else if (
            whiteResult === 'win' &&
            currentGame.time_class === 'blitz'
          ) {
            whiteWinsBlitz++;
          } else if (
            whiteResult === 'win' &&
            currentGame.time_class === 'bullet'
          ) {
            whiteWinsBullet++;
          } else if (
            whiteResult === 'win' &&
            currentGame.time_class === 'daily'
          ) {
            whiteWinsDaily++;
          }

          if (
            whiteResult === 'agreed' ||
            whiteResult === 'repetition' ||
            whiteResult === 'stalemate' ||
            whiteResult === 'insufficient' ||
            whiteResult === '50move' ||
            whiteResult === 'timevsinsufficient'
          ) {
            whiteDrawsOverall++;
          }
          if (
            (whiteResult === 'agreed' && currentGame.time_class === 'rapid') ||
            (whiteResult === 'repetition' &&
              currentGame.time_class === 'rapid') ||
            (whiteResult === 'stalemate' &&
              currentGame.time_class === 'rapid') ||
            (whiteResult === 'insufficient' &&
              currentGame.time_class === 'rapid') ||
            (whiteResult === '50move' && currentGame.time_class === 'rapid') ||
            (whiteResult === 'timevsinsufficient' &&
              currentGame.time_class === 'rapid')
          ) {
            whiteDrawsRapid++;
          } else if (
            (whiteResult === 'agreed' && currentGame.time_class === 'blitz') ||
            (whiteResult === 'repetition' &&
              currentGame.time_class === 'blitz') ||
            (whiteResult === 'stalemate' &&
              currentGame.time_class === 'blitz') ||
            (whiteResult === 'insufficient' &&
              currentGame.time_class === 'blitz') ||
            (whiteResult === '50move' && currentGame.time_class === 'blitz') ||
            (whiteResult === 'timevsinsufficient' &&
              currentGame.time_class === 'blitz')
          ) {
            whiteDrawsBlitz++;
          } else if (
            (whiteResult === 'agreed' && currentGame.time_class === 'bullet') ||
            (whiteResult === 'repetition' &&
              currentGame.time_class === 'bullet') ||
            (whiteResult === 'stalemate' &&
              currentGame.time_class === 'bullet') ||
            (whiteResult === 'insufficient' &&
              currentGame.time_class === 'bullet') ||
            (whiteResult === '50move' && currentGame.time_class === 'bullet') ||
            (whiteResult === 'timevsinsufficient' &&
              currentGame.time_class === 'bullet')
          ) {
            whiteDrawsBullet++;
          } else if (
            (whiteResult === 'agreed' && currentGame.time_class === 'daily') ||
            (whiteResult === 'repetition' &&
              currentGame.time_class === 'daily') ||
            (whiteResult === 'stalemate' &&
              currentGame.time_class === 'daily') ||
            (whiteResult === 'insufficient' &&
              currentGame.time_class === 'daily') ||
            (whiteResult === '50move' && currentGame.time_class === 'daily') ||
            whiteResult === 'timevsinsufficient'
          ) {
            whiteDrawsDaily++;
          }
        }
      }

      const blackWinRateOverall =
        (blackWinsOverall / blackGamesPlayedOverall) * 100;
      const whiteWinRateOverall =
        (whiteWinsOverall / whiteGamesPlayedOverall) * 100;
      const blackLossesOverall = blackGamesPlayedOverall - blackWinsOverall;
      const whiteLossesOverall = whiteGamesPlayedOverall - whiteWinsOverall;

      const blackWinRateRapid = (blackWinsRapid / blackGamesPlayedRapid) * 100;
      const whiteWinRateRapid = (whiteWinsRapid / whiteGamesPlayedRapid) * 100;
      const blackLossesRapid = blackGamesPlayedRapid - blackWinsRapid;
      const whiteLossesRapid = whiteGamesPlayedRapid - whiteWinsRapid;

      const blackWinRateBlitz = (blackWinsBlitz / blackGamesPlayedBlitz) * 100;
      const whiteWinRateBlitz = (whiteWinsBlitz / whiteGamesPlayedBlitz) * 100;
      const blackLossesBlitz = blackGamesPlayedBlitz - blackWinsBlitz;
      const whiteLossesBlitz = whiteGamesPlayedBlitz - whiteWinsBlitz;

      const blackWinRateBullet =
        (blackWinsBullet / blackGamesPlayedBullet) * 100;
      const whiteWinRateBullet =
        (whiteWinsBullet / whiteGamesPlayedBullet) * 100;
      const blackLossesBullet = blackGamesPlayedBullet - blackWinsBullet;
      const whiteLossesBullet = whiteGamesPlayedBullet - whiteWinsBullet;

      const blackWinRateDaily = (blackWinsDaily / blackGamesPlayedDaily) * 100;
      const whiteWinRateDaily = (whiteWinsDaily / whiteGamesPlayedDaily) * 100;
      const blackLossesDaily = blackGamesPlayedDaily - blackWinsDaily;
      const whiteLossesDaily = whiteGamesPlayedDaily - whiteWinsDaily;

      console.log(
        'Rapid: ',
        rapidRating,
        'Blitz: ',
        blitzRating,
        'Bullet: ',
        bulletRating,
        'Daily: ',
        dailyRating
      );

      console.log(
        'OVERALL',
        'Black Winrate: ',
        blackWinRateOverall.toFixed(2),
        'White Winrate: ',
        whiteWinRateOverall.toFixed(2),
        'Black Wins: ',
        blackWinsOverall,
        'White Wins: ',
        whiteWinsOverall,
        'Black Draws: ',
        blackDrawsOverall,
        'White Draws: ',
        whiteDrawsOverall,
        'Black Losses: ',
        blackLossesOverall,
        'White Losses: ',
        whiteLossesOverall,
        'Total Number of Games: ',
        numOfGames
      );
      console.log(
        'RAPID',
        'Black Winrate: ',
        blackWinRateRapid.toFixed(2),
        'White Winrate: ',
        whiteWinRateRapid.toFixed(2),
        'Black Wins: ',
        blackWinsRapid,
        'White Wins: ',
        whiteWinsRapid,
        'Black Draws: ',
        blackDrawsRapid,
        'White Draws: ',
        whiteDrawsRapid,
        'Black Losses: ',
        blackLossesRapid,
        'White Losses: ',
        whiteLossesRapid
      );
      console.log(
        'BLITZ',
        'Black Winrate: ',
        blackWinRateBlitz.toFixed(2),
        'White Winrate: ',
        whiteWinRateBlitz.toFixed(2),
        'Black Wins: ',
        blackWinsBlitz,
        'White Wins: ',
        whiteWinsBlitz,
        'Black Draws: ',
        blackDrawsBlitz,
        'White Draws: ',
        whiteDrawsBlitz,
        'Black Losses: ',
        blackLossesBlitz,
        'White Losses: ',
        whiteLossesBlitz
      );
      console.log(
        'BULLET',
        'Black Winrate: ',
        blackWinRateBullet.toFixed(2),
        'White Winrate: ',
        whiteWinRateBullet.toFixed(2),
        'Black Wins: ',
        blackWinsBullet,
        'White Wins: ',
        whiteWinsBullet,
        'Black Draws: ',
        blackDrawsBullet,
        'White Draws: ',
        whiteDrawsBullet,
        'Black Losses: ',
        blackLossesBullet,
        'White Losses: ',
        whiteLossesBullet
      );
      console.log(
        'DAILY',
        'Black Winrate: ',
        blackWinRateDaily.toFixed(2),
        'White Winrate: ',
        whiteWinRateDaily.toFixed(2),
        'Black Wins: ',
        blackWinsDaily,
        'White Wins: ',
        whiteWinsDaily,
        'Black Draws: ',
        blackDrawsDaily,
        'White Draws: ',
        whiteDrawsDaily,
        'Black Losses: ',
        blackLossesDaily,
        'White Losses: ',
        whiteLossesDaily
      );
    })
    .catch(function (err) {
      console.log(err);
    });
}
import OPENINGS from './openings';
import OBJECTVALUES from './objectValues';
const ChessWebAPI = require('chess-web-api');
const chessAPI = new ChessWebAPI();

export default function Openings(user) {
  console.log('SCOOBY', user);
  return chessAPI
    .getPlayerMonthlyArchives(user)
    .then(async function (response) {
      const arr = response.body.archives;
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
      const allOpenings = OPENINGS();

      for (let x = 0; x < games.length; x++) {
        const currentGame = games[x];
        const timeClass = currentGame.time_class;
        const isRated = currentGame.rated;
        const currentGamePgn = games[x].pgn;

        const blackUser = games[x].black.username;
        const whiteUser = games[x].white.username;

        const blackResult = games[x].black.result;
        const whiteResult = games[x].white.result;

        const timeClassArr = ['rapid', 'blitz', 'bullet', 'daily'];
        const colors = [whiteResult, blackResult];

        const winConditions = ['win'];
        const lossConditions = ['checkmated', 'resigned', 'lose'];
        const drawConditions = [
          'agreed',
          'repetition',
          'stalemate',
          'insufficient',
          '50move',
          'timevsinsufficient',
        ];

        const conditions = [winConditions, lossConditions, drawConditions];

        const increase = (num, objVal) => {
          const getIndex = allOpenings.findIndex((x) => x.id === num);
          allOpenings[getIndex][objVal] += 1;
        };

        const increaseValues = (id, opening, colorResult) => {
          let num1 = 0;
          let num2 = 0;

          if (isRated) {
            if (currentGamePgn.includes(opening)) {
              increase(id, OBJECTVALUES[0]); // handles OBJECTVALUES 0

              for (let i = 0; i < conditions.length; i++) {
                // handles OBJECTVALUES 1-3
                if (conditions[i].includes(colorResult)) {
                  increase(id, OBJECTVALUES[i + 1]);
                }
              }
              for (let i = 0; i < colors.length; i++) {
                // handles OBJECTVALUES 4-5
                if (colorResult === colors[i]) {
                  increase(id, OBJECTVALUES[i + 4]);
                }
              }
              for (let i = 0; i < timeClassArr.length; i++) {
                // handles OBJECTVALUES 6-9
                if (timeClass === timeClassArr[i]) {
                  increase(id, OBJECTVALUES[i + 6]);
                }
              }
              for (let i = 0; i < colors.length; i++) {
                // handles OBJECTVALUES 10-17
                for (let j = 0; j < timeClassArr.length; j++) {
                  if (
                    timeClass === timeClassArr[j] &&
                    colorResult === colors[i]
                  ) {
                    increase(id, OBJECTVALUES[num1 + 10]);
                  }
                  num1++;
                }
              }
              for (let i = 0; i < timeClassArr.length; i++) {
                // handles OBJECTVALUES 18-29
                for (let j = 0; j < conditions.length; j++) {
                  if (
                    conditions[j].includes(colorResult) &&
                    timeClass === timeClassArr[i]
                  ) {
                    increase(id, OBJECTVALUES[num2 + 18]);
                  }
                  num2++;
                }
              }
            }
          }
        };

        for (let i = 0; i < allOpenings.length; i++) {
          if (whiteUser.toUpperCase() === user.toUpperCase() && isRated) {
            increaseValues(allOpenings[i].id, allOpenings[i].url, whiteResult);
          }
          if (blackUser.toUpperCase() === user.toUpperCase() && isRated) {
            increaseValues(allOpenings[i].id, allOpenings[i].url, blackResult);
          }
        }
      }

      
      //console.log('Opening Info', allOpenings);
      return allOpenings;
    })
    .catch(function (err) {
      console.log(err);
    });
}

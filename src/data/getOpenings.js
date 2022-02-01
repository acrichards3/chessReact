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
      const resetValues = () => {
        for (let i = 0; i < OPENINGS.length; i++) {
          OPENINGS[i].count = 0;
          OPENINGS[i].whiteCount = 0;
          OPENINGS[i].blackCount = 0;
          OPENINGS[i].wins = 0;
          OPENINGS[i].losses = 0;
          OPENINGS[i].draws = 0;
          OPENINGS[i].rapidGames = 0;
          OPENINGS[i].blitzGames = 0;
          OPENINGS[i].bulletGames = 0;
          OPENINGS[i].dailyGames = 0;
          OPENINGS[i].rapidWins = 0;
          OPENINGS[i].rapidLosses = 0;
          OPENINGS[i].rapidDraws = 0;
          OPENINGS[i].blitzWins = 0;
          OPENINGS[i].blitzLosses = 0;
          OPENINGS[i].blitzDraws = 0;
          OPENINGS[i].bulletWins = 0;
          OPENINGS[i].bulletLosses = 0;
          OPENINGS[i].bulletDraws = 0;
          OPENINGS[i].dailyWins = 0;
          OPENINGS[i].dailyLosses = 0;
          OPENINGS[i].dailyDraws = 0;
          OPENINGS[i].overallWinrate = 0;
          OPENINGS[i].rapidWinrate = 0;
          OPENINGS[i].blitzWinrate = 0;
          OPENINGS[i].bulletWinrate = 0;
          OPENINGS[i].dailyWinrate = 0;
        }
      };

      resetValues();

      for (let i = 0; i < games.length; i++) {
        const currentGame = games[i];
        const currentGamePgn = games[i].pgn;
        const blackUser = games[i].black.username;
        const whiteUser = games[i].white.username;
        const blackResult = games[i].black.result;
        const whiteResult = games[i].white.result;

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

        const increaseValues = (id, opening, colorResult) => {
          if (currentGamePgn.includes(opening)) {
            increaseCount(id);
          }

          if (colorResult === blackResult && currentGamePgn.includes(opening)) {
            increaseBlackCount(id);
          }

          if (colorResult === whiteResult && currentGamePgn.includes(opening)) {
            increaseWhiteCount(id);
          }

          if (colorResult === 'win' && currentGamePgn.includes(opening)) {
            // Handles Wins
            increaseWins(id);
            if (currentGame.time_class === 'rapid') {
              increaseRapidGames(id);
              increaseRapidWins(id);
            }
            if (currentGame.time_class === 'blitz') {
              increaseBlitzGames(id);
              increaseBlitzWins(id);
            }
            if (currentGame.time_class === 'bullet') {
              increaseBulletGames(id);
              increaseBulletWins(id);
            }
            if (currentGame.time_class === 'daily') {
              increaseDailyGames(id);
              increaseDailyWins(id);
            }
          }
          if (
            // Handles Draws
            (colorResult === 'agreed' && currentGamePgn.includes(opening)) ||
            (colorResult === 'repetition' &&
              currentGamePgn.includes(opening)) ||
            (colorResult === 'stalemate' && currentGamePgn.includes(opening)) ||
            (colorResult === 'insufficient' &&
              currentGamePgn.includes(opening)) ||
            (colorResult === '50move' && currentGamePgn.includes(opening)) ||
            (colorResult === 'timevsinsufficient' &&
              currentGamePgn.includes(opening))
          ) {
            increaseDraws(id);
            if (currentGame.time_class === 'rapid') {
              increaseRapidGames(id);
              increaseRapidDraws(id);
            }
            if (currentGame.time_class === 'blitz') {
              increaseBlitzGames(id);
              increaseBlitzDraws(id);
            }
            if (currentGame.time_class === 'bullet') {
              increaseBulletGames(id);
              increaseBulletDraws(id);
            }
            if (currentGame.time_class === 'daily') {
              increaseDailyGames(id);
              increaseDailyDraws(id);
            }
          }
          if (
            (colorResult === 'checkmated' &&
              currentGamePgn.includes(opening)) ||
            (colorResult === 'resigned' && currentGamePgn.includes(opening)) ||
            (colorResult === 'lose' && currentGamePgn.includes(opening))
          ) {
            // Handles Losses
            increaseLosses(id);
            if (currentGame.time_class === 'rapid') {
              increaseRapidGames(id);
              increaseRapidLosses(id);
            }
            if (currentGame.time_class === 'blitz') {
              increaseBlitzGames(id);
              increaseBlitzLosses(id);
            }
            if (currentGame.time_class === 'bullet') {
              increaseBulletGames(id);
              increaseBulletLosses(id);
            }
            if (currentGame.time_class === 'daily') {
              increaseDailyGames(id);
              increaseDailyLosses(id);
            }
          }
        };

        if (
          blackUser.toUpperCase() === user.toUpperCase() &&
          currentGame.rated
        ) {
          increaseValues(0, 'Kings-Fianchetto-Opening', blackResult);
          increaseValues(1, 'Queens-Pawn-Opening', blackResult);
          increaseValues(2, 'Reti-Opening', blackResult);
          increaseValues(3, 'Birds-Opening', blackResult);
          increaseValues(4, 'Nimzowitsch-Larsen-Attack', blackResult);
          increaseValues(5, 'Kings-Pawn-Opening', blackResult);
          increaseValues(6, 'English-Opening', blackResult);
          increaseValues(
            7,
            'English-Opening-Symmetrical-Variation',
            blackResult
          );
          increaseValues(8, 'Alekhines-Defense', blackResult);
          increaseValues(9, 'Caro-Kann-Defense', blackResult);
          increaseValues(10, 'Modern-Defense-with-1-d4', blackResult);
          increaseValues(11, 'Sicilian-Defense', blackResult);
          increaseValues(12, 'Scandinavian-Defense', blackResult);
          increaseValues(13, 'Dutch-Defense', blackResult);
          increaseValues(14, 'French-Defense', blackResult);
          increaseValues(15, 'Pirc-Defense', blackResult);
          increaseValues(16, 'Old-Benoni-Defense', blackResult);
          increaseValues(
            17,
            'English-Opening-Kings-English-Variation',
            blackResult
          );
          increaseValues(18, 'Sicilian-Defense-Closed', blackResult);
          increaseValues(19, 'Trompowsky-Attack', blackResult);
          increaseValues(20, 'Reti-Opening-Reti-Gambit', blackResult);
          increaseValues(21, 'Vienna-Game', blackResult);
          increaseValues(22, 'Queens-Gambit', blackResult);
          increaseValues(23, 'Kings-Gambit', blackResult);
          increaseValues(24, 'Kings-Indian-Attack', blackResult);
          increaseValues(25, 'Bishops-Opening', blackResult);
          increaseValues(
            26,
            'Queens-Pawn-Opening-Blackmar-Gambit',
            blackResult
          );
          increaseValues(27, 'Sicilian-Defense-Alapin-Variration', blackResult);
          increaseValues(
            28,
            'Sicilian-Defense-Smith-Morra-Gambit',
            blackResult
          );
          increaseValues(29, 'Slav-Defense', blackResult);
          increaseValues(30, 'Budapest-Gambit', blackResult);
          increaseValues(
            31,
            'Kings-Gambit-Declined-Falkbeer-Countergambit',
            blackResult
          );
          increaseValues(
            32,
            'Kings-Gambit-Declined-Classical-Variation',
            blackResult
          );
          increaseValues(33, 'Kings-Gambit-Accepted', blackResult);
          increaseValues(34, 'Petrovs-Defense', blackResult);
          increaseValues(35, 'Kings-Indian-Defense', blackResult);
          increaseValues(36, 'Queens-Gambit-Accepted', blackResult);
          increaseValues(
            37,
            'Scandinavian-Defense-Modern-Variation',
            blackResult
          );
          increaseValues(
            38,
            'Dutch-Defense-Staunton-Gambit-Accepted',
            blackResult
          );
          increaseValues(39, 'Old-Indian-Defense', blackResult);
          increaseValues(40, 'Philidor-Defense', blackResult);
          increaseValues(
            41,
            'Queens-Gambit-Declined-Albin-Countergambit',
            blackResult
          );
          increaseValues(
            42,
            'Queens-Gambit-Declined-Chigorin-Defense',
            blackResult
          );
          increaseValues(
            43,
            'Caro-Kann-Defense-Exchange-Variation',
            blackResult
          );
          increaseValues(44, 'Sicilian-Defense-Grand-Prix-Attack', blackResult);
          increaseValues(45, 'London-System', blackResult);
          increaseValues(46, 'Queens-Pawn-Opening-Torre-Attack', blackResult);
          increaseValues(47, 'Catalan-Opening', blackResult);
          increaseValues(48, 'French-Defense-Advance-Variation', blackResult);
          increaseValues(49, 'Petrovs-Defense-Steinitz-Attack', blackResult);
          increaseValues(50, 'Center-Game-Accepted-Danish-Gambit', blackResult);
          increaseValues(51, 'Petrovs-Defense-Three-Knights-Game', blackResult);
          increaseValues(52, 'French-Defense-Exchange-Variation', blackResult);
          increaseValues(53, 'Ruy-Lopez-Opening', blackResult);
          increaseValues(54, 'Italian-Game', blackResult);
          increaseValues(55, 'Scotch-Game', blackResult);
          increaseValues(56, 'French-Defense-Tarrasch-Variation', blackResult);
          increaseValues(
            57,
            'Kings-Gambit-Accepted-Bishops-Gambit',
            blackResult
          );
          increaseValues(
            58,
            'Caro-Kann-Defense-Advnace-Variation',
            blackResult
          );
          increaseValues(59, 'Richter-Veresov-Attack', blackResult);
          increaseValues(60, 'Grunfeld-Defense', blackResult);
          increaseValues(61, 'Queens-Indian-Defense', blackResult);
          increaseValues(
            62,
            'Modern-Defense-Standard-Pterodactyl-Defense',
            blackResult
          );
          increaseValues(63, 'Four-Knights-Game', blackResult);
          increaseValues(
            64,
            'Kings-Gambit-Accepted-Modern-Defense',
            blackResult
          );
          increaseValues(65, 'Benko-Gambit', blackResult);
          increaseValues(
            66,
            'Ruy-Lopez-Opening-Classical-Defense',
            blackResult
          );
          increaseValues(67, 'Nimzo-Indian-Defense', blackResult);
          increaseValues(68, 'French-Defense-Classical-Variation', blackResult);
          increaseValues(69, 'Benoni-Defense-Modern-Variation', blackResult);
          increaseValues(70, 'Italian-Game-Hungarian-Defense', blackResult);
          increaseValues(71, 'Giuoco-Piano-Game', blackResult);
          increaseValues(
            72,
            'French-Defense-Rubinstein-Variation',
            blackResult
          );
          increaseValues(73, 'Italian-Game-Two-Knights-Defense', blackResult);
          increaseValues(
            74,
            'Kings-Indian-Defense-Normal-Variation',
            blackResult
          );
          increaseValues(75, 'French-Defense-Winawer-Variation', blackResult);
          increaseValues(76, 'Ruy-Lopez-Opening-Jaenisch-Gambit', blackResult);
          increaseValues(
            77,
            'Queens-Gambit-Declined-Pseudo-Tarrasch-Defense',
            blackResult
          );
          increaseValues(78, 'Ruy-Lopez-Opening-Berlin-Defense', blackResult);
          increaseValues(
            79,
            'Ruy-Lopez-Opening-Old-Steinitz-Defense',
            blackResult
          );
          increaseValues(80, 'Bogo-Indian-Defense', blackResult);
          increaseValues(81, 'Caro-Kann-Defense-Panov-Attack', blackResult);
          increaseValues(
            82,
            'Grunfeld-Defense-Stockholm-Variation',
            blackResult
          );
          increaseValues(
            83,
            'Grunfeld-Defense-Three-Knights-Variation',
            blackResult
          );
          increaseValues(84, 'Four-Knights-Game-Scotch-Variation', blackResult);
          increaseValues(
            85,
            'Nimzo-Indian-Defense-Classical-Variation',
            blackResult
          );
          increaseValues(86, 'Catalan-Opening-Closed', blackResult);
          increaseValues(87, 'Giuoco-Piano-Game-Evans-Gambit', blackResult);
          increaseValues(
            88,
            'Ruy-Lopez-Opening-Morphy-Defense-Exchange-Variation',
            blackResult
          );
          increaseValues(89, 'Grunfeld-Defense-Brinckmann-Attack', blackResult);
          increaseValues(
            90,
            'Pirc-Defense-Main-Line-Austrian-Attack',
            blackResult
          );
          increaseValues(91, 'Pirc-Defense-Classical-Variation', blackResult);
          increaseValues(
            92,
            'Caro-Kann-Defense-Classical-Variation',
            blackResult
          );
          increaseValues(93, 'Sicilian-Defense-Kan-Variation', blackResult);
          increaseValues(
            94,
            'Nimzo-Indian-Defense-Hubner-Variation',
            blackResult
          );
          increaseValues(95, 'Scotch-Game-Classical-Variation', blackResult);
          increaseValues(
            96,
            'French-Defense-Classical-Burn-Variation',
            blackResult
          );
          increaseValues(97, 'Scotch-Game-Steinitz-Variation', blackResult);
          increaseValues(
            98,
            'Sicilian-Defense-Taimanov-Variation',
            blackResult
          );
          increaseValues(99, 'Semi-Slav-Defense', blackResult);
          increaseValues(
            100,
            'Queens-Gambit-Declined-Three-Knights-Semi-Tarrasch-Defense',
            blackResult
          );
          increaseValues(
            101,
            'Sicilian-Defense-Old-Sicilian-Open-Acelerated-Dragon-Variation',
            blackResult
          );
          increaseValues(
            102,
            'Grunfeld-Defense-Exchange-Variation',
            blackResult
          );
          increaseValues(103, 'Petrovs-Defense-Classical-Attack', blackResult);
          increaseValues(
            104,
            'Nimzo-Indian-Defense-Hubner-Rubinstein-Variation',
            blackResult
          );
          increaseValues(
            105,
            'Nimzo-Indian-Defense-Samisch-Variation',
            blackResult
          );
          increaseValues(106, 'Dutch-Defense-Leningrad-Main-Line', blackResult);
          increaseValues(
            107,
            'Kings-Indian-Defense-Normal-Fianchetto-Variation',
            blackResult
          );
          increaseValues(
            108,
            'Kings-Indian-Defense-Four-Pawns-Attack',
            blackResult
          );
          increaseValues(
            109,
            'Kings-Indian-Defense-Samisch-Variation',
            blackResult
          );
          increaseValues(
            110,
            'Sicilian-Defense-Open-Dragon-Variation',
            blackResult
          );
          increaseValues(
            111,
            'Sicilian-Defense-Open-Najdorf-Variation',
            blackResult
          );
          increaseValues(
            112,
            'Sicilian-Defense-Open-Scheveningen-Variation',
            blackResult
          );
          increaseValues(
            113,
            'Kings-Indian-Defense-Averbakh-Variation',
            blackResult
          );
          increaseValues(
            114,
            'Scotch-Game-Schmidt-Mieses-Variation',
            blackResult
          );
          increaseValues(
            115,
            'Kings-Indian-Defense-Orthodox-Variation',
            blackResult
          );
          increaseValues(
            116,
            'Sicilian-Defense-Open-Classical-Richter-Rauzer-Variation',
            blackResult
          );
          increaseValues(117, 'Dutch-Defense-Stonewall-Variation', blackResult);
          increaseValues(
            118,
            'Queens-Gambit-Declined-Orthodox-Defense',
            blackResult
          );
          increaseValues(
            119,
            'Kings-Indian-Defense-Bayonet-Attack',
            blackResult
          );
          increaseValues(999, 'Other-Openings', blackResult);
        }

        if (
          whiteUser.toUpperCase() === user.toUpperCase() &&
          currentGame.rated
        ) {
          increaseValues(0, 'Kings-Fianchetto-Opening', whiteResult);
          increaseValues(1, 'Queens-Pawn-Opening', whiteResult);
          increaseValues(2, 'Reti-Opening', whiteResult);
          increaseValues(3, 'Birds-Opening', whiteResult);
          increaseValues(4, 'Nimzowitsch-Larsen-Attack', whiteResult);
          increaseValues(5, 'Kings-Pawn-Opening', whiteResult);
          increaseValues(6, 'English-Opening', whiteResult);
          increaseValues(
            7,
            'English-Opening-Symmetrical-Variation',
            whiteResult
          );
          increaseValues(8, 'Alekhines-Defense', whiteResult);
          increaseValues(9, 'Caro-Kann-Defense', whiteResult);
          increaseValues(10, 'Modern-Defense-with-1-d4', whiteResult);
          increaseValues(11, 'Sicilian-Defense', whiteResult);
          increaseValues(12, 'Scandinavian-Defense', whiteResult);
          increaseValues(13, 'Dutch-Defense', whiteResult);
          increaseValues(14, 'French-Defense', whiteResult);
          increaseValues(15, 'Pirc-Defense', whiteResult);
          increaseValues(16, 'Old-Benoni-Defense', whiteResult);
          increaseValues(
            17,
            'English-Opening-Kings-English-Variation',
            whiteResult
          );
          increaseValues(18, 'Sicilian-Defense-Closed', whiteResult);
          increaseValues(19, 'Trompowsky-Attack', whiteResult);
          increaseValues(20, 'Reti-Opening-Reti-Gambit', whiteResult);
          increaseValues(21, 'Vienna-Game', whiteResult);
          increaseValues(22, 'Queens-Gambit', whiteResult);
          increaseValues(23, 'Kings-Gambit', whiteResult);
          increaseValues(24, 'Kings-Indian-Attack', whiteResult);
          increaseValues(25, 'Bishops-Opening', whiteResult);
          increaseValues(
            26,
            'Queens-Pawn-Opening-Blackmar-Gambit',
            whiteResult
          );
          increaseValues(27, 'Sicilian-Defense-Alapin-Variration', whiteResult);
          increaseValues(
            28,
            'Sicilian-Defense-Smith-Morra-Gambit',
            whiteResult
          );
          increaseValues(29, 'Slav-Defense', whiteResult);
          increaseValues(30, 'Budapest-Gambit', whiteResult);
          increaseValues(
            31,
            'Kings-Gambit-Declined-Falkbeer-Countergambit',
            whiteResult
          );
          increaseValues(
            32,
            'Kings-Gambit-Declined-Classical-Variation',
            whiteResult
          );
          increaseValues(33, 'Kings-Gambit-Accepted', whiteResult);
          increaseValues(34, 'Petrovs-Defense', whiteResult);
          increaseValues(35, 'Kings-Indian-Defense', whiteResult);
          increaseValues(36, 'Queens-Gambit-Accepted', whiteResult);
          increaseValues(
            37,
            'Scandinavian-Defense-Modern-Variation',
            whiteResult
          );
          increaseValues(
            38,
            'Dutch-Defense-Staunton-Gambit-Accepted',
            whiteResult
          );
          increaseValues(39, 'Old-Indian-Defense', whiteResult);
          increaseValues(40, 'Philidor-Defense', whiteResult);
          increaseValues(
            41,
            'Queens-Gambit-Declined-Albin-Countergambit',
            whiteResult
          );
          increaseValues(
            42,
            'Queens-Gambit-Declined-Chigorin-Defense',
            whiteResult
          );
          increaseValues(
            43,
            'Caro-Kann-Defense-Exchange-Variation',
            whiteResult
          );
          increaseValues(44, 'Sicilian-Defense-Grand-Prix-Attack', whiteResult);
          increaseValues(45, 'London-System', whiteResult);
          increaseValues(46, 'Queens-Pawn-Opening-Torre-Attack', whiteResult);
          increaseValues(47, 'Catalan-Opening', whiteResult);
          increaseValues(48, 'French-Defense-Advance-Variation', whiteResult);
          increaseValues(49, 'Petrovs-Defense-Steinitz-Attack', whiteResult);
          increaseValues(50, 'Center-Game-Accepted-Danish-Gambit', whiteResult);
          increaseValues(51, 'Petrovs-Defense-Three-Knights-Game', whiteResult);
          increaseValues(52, 'French-Defense-Exchange-Variation', whiteResult);
          increaseValues(53, 'Ruy-Lopez-Opening', whiteResult);
          increaseValues(54, 'Italian-Game', whiteResult);
          increaseValues(55, 'Scotch-Game', whiteResult);
          increaseValues(56, 'French-Defense-Tarrasch-Variation', whiteResult);
          increaseValues(
            57,
            'Kings-Gambit-Accepted-Bishops-Gambit',
            whiteResult
          );
          increaseValues(
            58,
            'Caro-Kann-Defense-Advnace-Variation',
            whiteResult
          );
          increaseValues(59, 'Richter-Veresov-Attack', whiteResult);
          increaseValues(60, 'Grunfeld-Defense', whiteResult);
          increaseValues(61, 'Queens-Indian-Defense', whiteResult);
          increaseValues(
            62,
            'Modern-Defense-Standard-Pterodactyl-Defense',
            whiteResult
          );
          increaseValues(63, 'Four-Knights-Game', whiteResult);
          increaseValues(
            64,
            'Kings-Gambit-Accepted-Modern-Defense',
            whiteResult
          );
          increaseValues(65, 'Benko-Gambit', whiteResult);
          increaseValues(
            66,
            'Ruy-Lopez-Opening-Classical-Defense',
            whiteResult
          );
          increaseValues(67, 'Nimzo-Indian-Defense', whiteResult);
          increaseValues(68, 'French-Defense-Classical-Variation', whiteResult);
          increaseValues(69, 'Benoni-Defense-Modern-Variation', whiteResult);
          increaseValues(70, 'Italian-Game-Hungarian-Defense', whiteResult);
          increaseValues(71, 'Giuoco-Piano-Game', whiteResult);
          increaseValues(
            72,
            'French-Defense-Rubinstein-Variation',
            whiteResult
          );
          increaseValues(73, 'Italian-Game-Two-Knights-Defense', whiteResult);
          increaseValues(
            74,
            'Kings-Indian-Defense-Normal-Variation',
            whiteResult
          );
          increaseValues(75, 'French-Defense-Winawer-Variation', whiteResult);
          increaseValues(76, 'Ruy-Lopez-Opening-Jaenisch-Gambit', whiteResult);
          increaseValues(
            77,
            'Queens-Gambit-Declined-Pseudo-Tarrasch-Defense',
            whiteResult
          );
          increaseValues(78, 'Ruy-Lopez-Opening-Berlin-Defense', whiteResult);
          increaseValues(
            79,
            'Ruy-Lopez-Opening-Old-Steinitz-Defense',
            whiteResult
          );
          increaseValues(80, 'Bogo-Indian-Defense', whiteResult);
          increaseValues(81, 'Caro-Kann-Defense-Panov-Attack', whiteResult);
          increaseValues(
            82,
            'Grunfeld-Defense-Stockholm-Variation',
            whiteResult
          );
          increaseValues(
            83,
            'Grunfeld-Defense-Three-Knights-Variation',
            whiteResult
          );
          increaseValues(84, 'Four-Knights-Game-Scotch-Variation', whiteResult);
          increaseValues(
            85,
            'Nimzo-Indian-Defense-Classical-Variation',
            whiteResult
          );
          increaseValues(86, 'Catalan-Opening-Closed', whiteResult);
          increaseValues(87, 'Giuoco-Piano-Game-Evans-Gambit', whiteResult);
          increaseValues(
            88,
            'Ruy-Lopez-Opening-Morphy-Defense-Exchange-Variation',
            whiteResult
          );
          increaseValues(89, 'Grunfeld-Defense-Brinckmann-Attack', whiteResult);
          increaseValues(
            90,
            'Pirc-Defense-Main-Line-Austrian-Attack',
            whiteResult
          );
          increaseValues(91, 'Pirc-Defense-Classical-Variation', whiteResult);
          increaseValues(
            92,
            'Caro-Kann-Defense-Classical-Variation',
            whiteResult
          );
          increaseValues(93, 'Sicilian-Defense-Kan-Variation', whiteResult);
          increaseValues(
            94,
            'Nimzo-Indian-Defense-Hubner-Variation',
            whiteResult
          );
          increaseValues(95, 'Scotch-Game-Classical-Variation', whiteResult);
          increaseValues(
            96,
            'French-Defense-Classical-Burn-Variation',
            whiteResult
          );
          increaseValues(97, 'Scotch-Game-Steinitz-Variation', whiteResult);
          increaseValues(
            98,
            'Sicilian-Defense-Taimanov-Variation',
            whiteResult
          );
          increaseValues(99, 'Semi-Slav-Defense', whiteResult);
          increaseValues(
            100,
            'Queens-Gambit-Declined-Three-Knights-Semi-Tarrasch-Defense',
            whiteResult
          );
          increaseValues(
            101,
            'Sicilian-Defense-Old-Sicilian-Open-Acelerated-Dragon-Variation',
            whiteResult
          );
          increaseValues(
            102,
            'Grunfeld-Defense-Exchange-Variation',
            whiteResult
          );
          increaseValues(103, 'Petrovs-Defense-Classical-Attack', whiteResult);
          increaseValues(
            104,
            'Nimzo-Indian-Defense-Hubner-Rubinstein-Variation',
            whiteResult
          );
          increaseValues(
            105,
            'Nimzo-Indian-Defense-Samisch-Variation',
            whiteResult
          );
          increaseValues(106, 'Dutch-Defense-Leningrad-Main-Line', whiteResult);
          increaseValues(
            107,
            'Kings-Indian-Defense-Normal-Fianchetto-Variation',
            whiteResult
          );
          increaseValues(
            108,
            'Kings-Indian-Defense-Four-Pawns-Attack',
            whiteResult
          );
          increaseValues(
            109,
            'Kings-Indian-Defense-Samisch-Variation',
            whiteResult
          );
          increaseValues(
            110,
            'Sicilian-Defense-Open-Dragon-Variation',
            whiteResult
          );
          increaseValues(
            111,
            'Sicilian-Defense-Open-Najdorf-Variation',
            whiteResult
          );
          increaseValues(
            112,
            'Sicilian-Defense-Open-Scheveningen-Variation',
            whiteResult
          );
          increaseValues(
            113,
            'Kings-Indian-Defense-Averbakh-Variation',
            whiteResult
          );
          increaseValues(
            114,
            'Scotch-Game-Schmidt-Mieses-Variation',
            whiteResult
          );
          increaseValues(
            115,
            'Kings-Indian-Defense-Orthodox-Variation',
            whiteResult
          );
          increaseValues(
            116,
            'Sicilian-Defense-Open-Classical-Richter-Rauzer-Variation',
            whiteResult
          );
          increaseValues(117, 'Dutch-Defense-Stonewall-Variation', whiteResult);
          increaseValues(
            118,
            'Queens-Gambit-Declined-Orthodox-Defense',
            whiteResult
          );
          increaseValues(
            119,
            'Kings-Indian-Defense-Bayonet-Attack',
            whiteResult
          );
          increaseValues(999, 'Other-Openings', whiteResult);
        }
        for (let i = 0; i < OPENINGS.length; i++) {
          const overallWinrate = ((OPENINGS[i].wins / OPENINGS[i].count) * 100).toFixed(2);
          const rapidWinrate =
            ((OPENINGS[i].rapidWins / OPENINGS[i].rapidGames) * 100).toFixed(2);
          const blitzWinrate =
            ((OPENINGS[i].blitzWins / OPENINGS[i].blitzGames) * 100).toFixed(2);
          const bulletWinrate =
            ((OPENINGS[i].bulletWins / OPENINGS[i].bulletGames) * 100).toFixed(2);
          const dailyWinrate =
            ((OPENINGS[i].dailyWins / OPENINGS[i].dailyGames) * 100).toFixed(2);

          OPENINGS[i].overallWinrate = overallWinrate;
          OPENINGS[i].rapidWinrate = rapidWinrate;
          OPENINGS[i].blitzWinrate = blitzWinrate;
          OPENINGS[i].bulletWinrate = bulletWinrate;
          OPENINGS[i].dailyWinrate = dailyWinrate;
        }
      }

      console.log('Opening Info', OPENINGS);
    })
    .catch(function (err) {
      console.log(err);
    });
}

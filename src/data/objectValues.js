const OBJECTVALUES = [
  'count', // 0                         GAME PLAYED ✔

  'wins', // 1                          OVERALL GAME RESULT ✔
  'losses', // 2
  'draws', // 3

  'whiteCount', // 4                    OVERALL GAME COLOR ✔
  'blackCount', // 5

  'rapidGames', // 6                    OVERALL TIME CLASS ✔
  'blitzGames', // 7
  'bulletGames', // 8
  'dailyGames', // 9

  'rapidGamesWhite', // 10              TIME CLASS + GAME COLOR
  'blitzGamesWhite', // 11
  'bulletGamesWhite', // 12
  'dailyGamesWhite', // 13
  'rapidGamesBlack', // 14
  'blitzGamesBlack', // 15
  'bulletGamesBlack', // 16
  'dailyGamesBlack', // 17

  'rapidWins', // 18                    TIME CLASS + GAME RESULT
  'rapidLosses', // 19
  'rapidDraws', // 20
  'blitzWins', // 21
  'blitzLosses', // 22
  'blitzDraws', // 23
  'bulletWins', // 24
  'bulletLosses', // 25
  'bulletDraws', // 26
  'dailyWins', // 27
  'dailyLosses', // 28
  'dailyDraws', // 29
];

/* if (currentGame.rated === true) {
  if (currentGamePgn.includes(opening)) {
    increase(id, 'count');



    if (currentGame.time_class === 'rapid' && colorResult === blackResult) {
      increase(id);
    }
    if (currentGame.time_class === 'blitz' && colorResult === blackResult) {
      increase(id);
    }
    if (currentGame.time_class === 'bullet' && colorResult === blackResult) {
      increase(id);
    }
    if (currentGame.time_class === 'daily' && colorResult === blackResult) {
      increase(id);
    }

    if (currentGame.time_class === 'rapid' && colorResult === whiteResult) {
      increase(id);
    }
    if (currentGame.time_class === 'blitz' && colorResult === whiteResult) {
      increase(id);
    }
    if (currentGame.time_class === 'bullet' && colorResult === whiteResult) {
      increase(id);
    }
    if (currentGame.time_class === 'daily' && colorResult === whiteResult) {
      increase(id);
    }
  }




  if (colorResult === blackResult && currentGamePgn.includes(opening)) {
    increase(id);
  }

  if (colorResult === whiteResult && currentGamePgn.includes(opening)) {
    increase(id);
  }




  if (colorResult === 'win' && currentGamePgn.includes(opening)) {
    // Handles Wins
    increase(id);
    if (currentGame.time_class === 'rapid') {
      increase(id);
      increase(id);
    }
    if (currentGame.time_class === 'blitz') {
      increase(id);
      increase(id);
    }
    if (currentGame.time_class === 'bullet') {
      increase(id);
      increase(id);
    }
    if (currentGame.time_class === 'daily') {
      increase(id);
      increase(id);
    }
  }




  if (
    // Handles Draws
    (colorResult === 'agreed' && currentGamePgn.includes(opening)) ||
    (colorResult === 'repetition' && currentGamePgn.includes(opening)) ||
    (colorResult === 'stalemate' && currentGamePgn.includes(opening)) ||
    (colorResult === 'insufficient' && currentGamePgn.includes(opening)) ||
    (colorResult === '50move' && currentGamePgn.includes(opening)) ||
    (colorResult === 'timevsinsufficient' && currentGamePgn.includes(opening))
  ) {
    increase(id);
    increase(id);
    if (currentGame.time_class === 'rapid') {
      increase(id);
      increase(id);
    }
    if (currentGame.time_class === 'blitz') {
      increase(id);
      increase(id);
    }
    if (currentGame.time_class === 'bullet') {
      increase(id);
      increase(id);
    }
    if (currentGame.time_class === 'daily') {
      increase(id);
      increase(id);
    }
  }




  if (
    (colorResult === 'checkmated' && currentGamePgn.includes(opening)) ||
    (colorResult === 'resigned' && currentGamePgn.includes(opening)) ||
    (colorResult === 'lose' && currentGamePgn.includes(opening))
  ) {
    // Handles Losses
    increase(id);
    if (currentGame.time_class === 'rapid') {
      increase(id);
      increase(id);
    }
    if (currentGame.time_class === 'blitz') {
      increase(id);
      increase(id);
    }
    if (currentGame.time_class === 'bullet') {
      increase(id);
      increase(id);
    }
    if (currentGame.time_class === 'daily') {
      increase(id);
      increase(id);
    }
  }
} */



export default OBJECTVALUES;
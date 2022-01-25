const ChessWebAPI = require("chess-web-api");
const chessAPI = new ChessWebAPI();

export default function Stats(user) {
  chessAPI.getPlayerMonthlyArchives(user).then(
    function (response) {
      const arr = response.body.archives;
      const recents = [];

      for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1 || i === arr.length - 2) {
          recents.push(arr[i]);
        }
      }

      function getJson() {
        return fetch(recents).then((response) => response.json());
      }

      console.log("Player Stats", getJson());
    },
    function (err) {
      console.error(err);
    }
  );
}

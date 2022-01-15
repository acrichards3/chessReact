const ChessWebAPI = require("chess-web-api");
const chessAPI = new ChessWebAPI();

export default function getStats() {
  chessAPI.getPlayerMonthlyArchives("Acricha3").then(
    function (response) {
      console.log("Player Stats", response.body);
    },
    function (err) {
      console.error(err);
    }
  );
}

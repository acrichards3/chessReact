const ChessWebAPI = require("chess-web-api");
const chessAPI = new ChessWebAPI();

export default function Player(user) {
  chessAPI.getPlayer(user).then(
    function (response) {
      console.log("Player Profile", response.body);
    },
    function (err) {
      console.error(err);
    }
  );
}

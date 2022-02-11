const ChessWebAPI = require("chess-web-api");
const chessAPI = new ChessWebAPI();

export default async function Player(user) {

  await chessAPI.getPlayer(user).then(
    function (response) {
      console.log("Player Profile", response.body);
    },
    function (err) {
      console.error(err);
    }
  );
}

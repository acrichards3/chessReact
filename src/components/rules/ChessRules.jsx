import React from 'react';
import './chessRules.css';

export default function ChessRules() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="title">How to Play Chess</h1>
      </div>
      <div className="row">
        <h4 className="header">Object of the Game</h4>
        <p className="text">
          To put it simply, the goal in Chess is to checkmate your opponents
          king any way that you can, but how does checkmate even work? It's
          actually quite simple. To achieve a checkmate in chess the opponents
          King has to be in check (under attack) and have no safe spaces left to
          move to. If the king has no safe spaces to go to and the check cannot
          be stopped either by capturing a piece, blocking, or moving the king,
          the game is over.
        </p>
        <p className="text">
          Believe it or not, checkmate can be achieved in as few as 2 moves or
          it could take well over 200, it varies from game to game. So far it
          might sound pretty simple, however, there are also a few ways that
          cames can end in a draw wich you can see by reading the Draws section
          below.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Time Control</h4>
        <p className="text">
          You'll find very quickly that you will need plenty of time to think in
          Chess for each of your moves if you want to be successful. However, if
          a game is over 100 moves long and each person is taking a couple
          minutes for each move,1 game of Chess can be a long process. At the
          professional level some games last for multiple hours! So the idea of
          time control was introduced.
        </p>
        <p className="text">
          When playing with time control, each player starts with a set amount
          of time on their clock. When the game begins the clock will start
          ticking down for White (since white always goes first) then when their
          turn is complete, they will start their opponents clock which will
          start ticking their time down. After each move, you switch the timer
          back to your opponent. If you run out of time, you automatically lose
          the game so it's important to keep an eye on how much time you have
          left!
        </p>
        <p className="text">
          There are some Time Settings you can play with that start you with as
          few as 30 seconds all the way up to multiple hours. Some settings even
          allow you to get bonus time for each move or bonus time after a
          certain amount of moves. There are also settings out there where your
          clock doesn't start ticking from your time until after a few seconds
          has passed. There are plenty of different settings to choose from and
          it can vastly change your game so find a time setting that is right
          for you. For beginners, it's recommended that you do no less than 10
          minutes per game so that you have time to think about your moves and
          learn.
        </p>
      </div>
      <div className="row">
        <h4 className="header">How Pieces Move</h4>
        <p className="text">
          Now that we've gone over the basic idea of Chess, we should talk about
          how to actually get started. Something that is good to know before we
          talk about moving anything though is that in every single game of
          Chess, white always starts first. You might think this is a bit
          unfair, and you would techincally be right. White always does start
          with a very slight advantage, however, unless you are at a semi-pro
          level this won't matter much being as Chess is very complex.
        </p>
        <h5 className="header">Pawns</h5>
        <p className="text">
          Each player starts with 8 pawns and they can either be your weakest
          piece or have the potential to be the strongest piece depending on the
          situation. Pawns only move forward unless capturing an enemy piece but
          we will come back to that. On the first move and only the first move
          for any given pawn, you have the option to move it either 1 or 2
          spaces forward. After a pawn has been moved once, it can only move
          once space forward for the reset of the game. If there is any other
          piece in front of the pawn, it cannot move forward or around it, it is
          essentially stuck there until the square in front is unoccupied.
        </p>
        <p className="text">
          To take an enemy piece with a pawn, they have to be one space farways
          and one space wither left or right of that pawn (1 space diagonal).
          When capturing a piece, your pawn will take the space of your
          opponents and your turn is over.
        </p>
        <p className="text">
          If a pawn makes it all the way to the end of the board without being
          captured, it will be promoted to any other piece of your choice, this
          even means that you can potentially have multiple queens on the board
          which is one of the fastest ways to win in most games!
        </p>
        <h5 className="header">Knights</h5>
        <p className="text">
          Next we will talk about the knight which is a great piece for
          attacking multiple things at the same time. Knights are special
          because unlike any other piece in the game, knights can jump over
          pieces. This makes them a great choice when there is a lot happening
          on the board and not a lot of room to move.
        </p>
        <p className="text">
          To move a knight all you have to do is move it in the sape of an L.
          That is, 2 spaces vertically and 1 space horizontally or vice versa.
          Knights can move in any direction which makes them a great piece for
          getting around the board quickly and setting up forks. If your knight
          lands on an opponents piece, you capture that piece. Knights can jump
          over pieces but cannot occupy spaces that are already being occupied
          by your own pieces.
        </p>
        <h5 className="header">Bishops</h5>
        <p className="text">
          Bishops are like the snipers of Chess, many times they can stay in one
          place for a long time then deliver a massive blow to your opponent.
          Bishops can move as many squares as desired as long as they are being
          moved diagonally. Each player starts with a bishop to navigate the
          light squares and one to navigate the dark squares. Unlike knights,
          bishops cannot jump over pieces. They can be moved forward or
          backwards as many times as you'd like.
        </p>
        <h5 className="header">Rooks</h5>
        <p className="text">
          Rooks are very similar to bishops, but you should be more careful with
          them because they are a lot more powerful than your bishops. Rooks can
          move up, down, left, or right as many spaces as you want. Just like
          bishops though, they can't jump over pieces.
        </p>
        <h5 className="header">Queen</h5>
        <p className="text">
          Your queen is your most powerful piece so it's important that you
          protect her. Many times, losing a queen means losing the game. So why
          is the queen so powerful? It's because your queen is essentially a
          rook and bishop combined. Your queen can move up, down, left, right,
          or diagonal in any direction as many spaces as you want. The queen
          cannot jump over any pieces.
        </p>
        <h5 className="header">King</h5>
        <p className="text">
          Even more important than your queen is the king. The king is a special
          piece because it cannot be captured, only checkmated. This means that
          you cannot move your king into check (immediate danger of being
          captured). If you do decidee to move you king, it can move 1 space in
          any direction and cannot jump other pieces. Since your king is such an
          important piece it's wise to keep it protected and not bring it out
          unless you have a good reason!
        </p>
      </div>
      <div className="row">
        <h4 className="header">Castling</h4>
        <p className="text">
          Castling is a special move in Chess that allows you to move your king
          an rook at the same time. The point of castling is usually to get your
          king to safetly as quickly as possible but it can only be done once
          per player per game and you have to meet a couple of conditions before
          you can castle. When castling, your king will move 2 spaces (either
          left or right depending on which side you castle) and the rook on that
          side with move to the outside space of your king. This all counts as 1
          turn, but let's talk about the rules for castling.
        </p>
        <p className="text">
          For starters, you cannot castle if you move your king beforehand, even
          if you move your king back to it's original square, you can no longer
          castle. This rule also applys if you move the rook on the side that
          you are trying to castle to. Once you move a rook, you cannot castle
          on that side anymore.
        </p>
        <p className="text">
          You also cannot castle if your king is in check or if it will pass
          through check on the castling move. If you manage to stop the check
          without moving your king or rook, you can still castle.
        </p>
        <p className="text">
          One final rule to castling is that you cannot castle if there are any
          pieces between your king and rook.
        </p>
        <p className="text">
          Castling might seem pretty complicated but after a couple of games, it
          actually becomes really easy to pick up and you will find yourself
          doing it most games. Ideally, you'll want to castle as early as
          possible.
        </p>
      </div>
      <div className="row">
        <h4 className="header">En Passant</h4>
        <p className="text">
          En Passant is the other special move in Chess which is pretty rare but
          still important to know nonetheless. En Passant is a special way for
          your pawn to capture an enemy pawn when a special condition is met.
          That condition is when your opponent moves their pawn 2 spaces forward
          and it lands right next to your pawn side by side. Since it is unfair
          that your pawn never had the chance to capture that pawn since it
          moved 2 spaces, you can legally still capture it by acting as though
          they only moved 1 space.
        </p>
        <div className="p">
          You still move your pawn diagonally forward like normal during En
          Passant, but you also thake their pawn. You do not have to En Passant
          your opponent if given the opportunity, the choice is completely
          yours.
        </div>
      </div>
      <div className="row">
        <h4 className="header">Draws</h4>
        <p className="text">
          Sometimes, Chess games don't end with a winner and loser. It is
          possible to end the game in a draw and there are actually a few ways
          this can happen.
        </p>
        <h5 className="header">Draw by Agreement</h5>
        <p className="text">
          This one is pretty self explainitory. If you and your opponent agree
          to end the game in a draw, the game ends in a draw.
        </p>
        <h5 className="header">Stalemate</h5>
        <p className="text">
          This is one of the most common ways that beginners end a game in a
          draw. Stalemate occurs when you are not in check but you also cannot
          move your king to any safe spaces. This only happens if you are forced
          to move the king (its your only piece left that can move). Since it's
          illegal for the king to move himself into check the game ends in a
          draw. Keep an eye out for this one because it is one of the most
          frustrating things that can happen to you if you are winning a game of
          Chess.
        </p>
        <h5 className="header">Insufficient Material</h5>
        <p className="text">
          This type of draw happens when checkmate becomes impossible due to
          insufficient material. Usually this means only the kings are left on
          the board or a king and a knight. A king and a pawn left on the board
          is not insufficient material since the pawn can be promoted if it
          makes it to the opponents back rank.
        </p>
        <h5 className="header">Repetition</h5>
        <p className="text">
          If both players repeat move 3 times in a row, the game ends in draw by
          repetition. This is because there is no progress being made towards
          ending the game with a winner and it could go on forever.
        </p>
        <h5 className="header">50 Move Rule</h5>
        <p className="text">
          The 50 Move draw happens if both players make 50 moves without
          capturing a piece or moveing a pawn. This is a draw because no
          progress is being made towards the game and it could go on forever if
          not stopped. This is something that usually only happens at the end of
          a game when the kings and pawns are the only pieces left on the board.
        </p>
      </div>
    </div>
  );
}

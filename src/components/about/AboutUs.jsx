import React from 'react';
import { Link } from 'react-router-dom';
import './aboutUs.css';

export default function AboutUs() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="title">About ChessInfo</h1>
      </div>
      <div className="row">
        <p className="text">
          Hello and welcome to ChessInfo! Our primary goal is to provide you in
          depth stats about your profile on Chess.com. Anybody who has a
          Chess.com account and has played any games in the last 90 days can
          type their username into our seach bar and you will be given back all
          sorts of stats about your Chess.com account
        </p>
      </div>
      <div className="row">
        <h4 className="header">Our Backstory</h4>
        <p className="text">
          Chess is a passion of ours here and something that everyone is
          constantly chasing is to become a better player. Sometimes though,
          it's very easy to feel like you are spinning your wheels and not
          making any significany improvement. ChessInfo was created to help you
          identify your strengths and weaknesses to help you keep improving and
          to climb out of bad habits
        </p>
        <p className="text">
          For all of you tournament players out there, we're here to help you
          too. Have you ever wished you could climb into your opponents head
          before a match starts? Well here you can. View your opponents most
          played openings, their strengths, and their weaknesses simply by
          typing their username in and taking a look at all of their stats
        </p>
      </div>
      <div className="row">
        <div className="col">
          <h4 className="header">What Stats Can I See on ChessInfo?</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="text">
            As of right now, you can view stats such as your elo (up to 100
            recent games) for all time classes (Rapid, Blitz, Bullet, or Daily),
            you can see winrates for both white and black and you can see all
            kinds of stats for all openings that you've ever played.
          </p>
          <p className="text">
            Not seeing something you'd like to? Don't worry! ChessInfo is
            constantly being updated to give you the best insights possible for
            your Chess account. If you have a suggestion to be added please see
            our contact email located at:
          </p>
          <Link to="/terms-&-conditions">Terms & Conditions</Link>
          <h4 className="header">Don't Have a Chess.com Account?</h4>
          <p className="text">
            No worries! Set up your Chess.com account for free by heading to
            Chess.com or by clicking the chess board on the screen. Go ahead and
            play a few games then come give us another visit! Have a friend that
            plays chess? You can look up their stats too! Any user that's played
            chess on chess.com in the past 90 days can be seen on our site. By
            default, we show you Grand Master player Hikaru's stats.
          </p>
        </div>
        <div className="col-6">
          <img
            className="image"
            href="https://www.chess.com/register?returnUrl=https://www.chess.com/"
            src="https://betacssjs.chesscomfiles.com/bundles/web/images/offline-play/standardboard.png"
            alt="Chess Board"
          />
        </div>
      </div>
    </div>
  );
}

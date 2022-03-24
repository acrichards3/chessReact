import React from 'react';
import { Accordion } from 'react-bootstrap';
import './frequentQuestions.css';

export default function FrequentQuestions() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="title">Frequently Asked Questions</h1>
      </div>
      <div className="row accord">
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="1">
            <Accordion.Header>How does ChessInfo work?</Accordion.Header>
            <Accordion.Body>
              If you have ever played Chess on Chess.com, we can take all of
              your info and display a whole bunch of stats for you to see.
              Things from openings, graphs, winrates, etc. Simply type your
              Chess.com username into the search bar and ChessInfo will display
              all the info from the past 3 months of playing! How can we achieve
              this you might ask? We use Chess.com's public API to pull all of
              your stats from the last 90 days. Since this information is
              public, you can look up any player that you'd like!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              My recent games arent showing up what do I do?
            </Accordion.Header>
            <Accordion.Body>
              It may take up to 24 hours for new data to appear on our site. If
              you have waited longer than 24 hours and are seeing no changes,
              make sure that you are playing rated games as we do not track
              games that are unrated.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              I can't find the stats that im looking for, what should I do?
            </Accordion.Header>
            <Accordion.Body>
              We are constantly making improvements to ChessInfo to make your
              experience the best it can be. If you have a suggestion that you'd
              like us to add to the site, check out our contact into on the
              about us page!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

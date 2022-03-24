import React, { useState } from 'react';
import Top10 from './Top10';
import OpeningPrinciples from './OpeningPrinciples';
import MidgamePrinciples from './MidgamePrinciples';
import EndgamePrinciples from './EndgamePrinciples';
import { Tab, Tabs } from '@blueprintjs/core';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './allPrinciples.css';

export default function AllPrinciples() {
  const [active, setActive] = useState();

  return (
    <div className="container">
      <Tabs className="row item" id="principles" selectedTabId={active} large={true}>
        <Tab
          id="t10"
          title="Top 10 Principles"
          panel={<Top10 />}
          onChange={() => setActive('t10')}
        />
        <Tab
          id="open"
          title="Opening Principles"
          panel={<OpeningPrinciples />}
          onChange={() => setActive('open')}
        />
        <Tab
          id="mid"
          title="Midgame Principles"
          panel={<MidgamePrinciples />}
          onChange={() => setActive('mid')}
        />
        <Tab
          id="end"
          title="Endgame Principles"
          panel={<EndgamePrinciples />}
          onChange={() => setActive('end')}
        />
      </Tabs>
    </div>
  );
}

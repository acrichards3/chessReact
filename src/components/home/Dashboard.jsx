import React, { useState } from 'react';
import EloChart from './charts/EloChart';
import WhiteWinrate from './charts/WhiteWinrate';
import BlackWinrate from './charts/BlackWinrate';
import Rank from './ranks/Rank';
import Stats from '../../data/getStats';
import SearchUser from './SearchUser';
import './dashboard.css';
import { useEffect } from 'react';

export default function Dashboard() {
  const [timeState, setTimeState] = useState('Overall');
  const [name, setName] = useState('Hikaru');
  const [stats, setStats] = useState();

  useEffect(() => {
    updateStats(name);
    // eslint-disable-next-line
  }, [timeState])

  async function updateStats(user) {
    console.log('JAUNNN', user);
    const results = await Stats(user);

    console.log('WHYYYYYYYYYYYYYY', results);

    switch (timeState) {
      case 'Rapid':
        setStats(results[0].rapidRating);
        break;
      case 'Bullet':
        setStats(results[0].bulletRating);
        break;
      case 'Daily':
        setStats(results[0].dailyRating);
        break;
      default:
        setStats(results[0].blitzRating);
    }
  }

  return (
    <div>
      <div className="enterUser">
        <SearchUser
          name={name}
          setName={setName}
          timeState={timeState}
          setTimeState={setTimeState}
          updateStats={updateStats}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 eloChart">
            <EloChart name={name} timeState={timeState} stats={stats} />
          </div>
          <div className="col-lg-4 winrateChart">
            <WhiteWinrate />
          </div>
          <div className="col-lg-4 winrateChart">
            <BlackWinrate />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Rank />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import EloChart from './charts/EloChart';
import WhiteWinrate from './charts/WhiteWinrate';
import BlackWinrate from './charts/BlackWinrate';
import Rank from './ranks/Rank';
import SearchUser from './SearchUser';
import getStats from '../../data/getStats';
import getOpenings from '../../data/getOpenings';
import './dashboard.css';

export default function Dashboard() {
  getStats();
  getOpenings();

  return (
    <div>
      <div className="enterUser">
        <SearchUser />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 eloChart">
            <EloChart />
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

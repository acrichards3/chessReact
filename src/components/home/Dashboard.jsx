import React, { useState } from 'react';
import EloChart from './charts/EloChart';
import WhiteWinrate from './charts/WhiteWinrate';
import BlackWinrate from './charts/BlackWinrate';
import Rank from './ranks/Rank';
import SearchUser from './SearchUser';
import './dashboard.css';

export default function Dashboard() {
  const [timeState, setTimeState] = useState('Overall');
  const [name, setName] = useState('Hikaru');

  
  return (
    <div>
      <div className="enterUser">
        <SearchUser name={name} setName={setName} timeState={timeState} setTimeState={setTimeState}/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 eloChart">
            <EloChart timeState={timeState}/>
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

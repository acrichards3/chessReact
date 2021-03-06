import React, { useState, useEffect, useContext } from 'react';
import EloChart from './charts/EloChart';
import DataTable from './charts/DataTable';
import WhiteWinrate from './charts/WhiteWinrate';
import BlackWinrate from './charts/BlackWinrate';
import Stats from '../../data/getStats';
import Openings from '../../data/getOpenings';
import SearchUser from './SearchUser';
import { InitContext } from '../../contexts/InitialContext';
import './dashboard.css';

export default function Dashboard() {
  const { initialUser, setInitialUser } = useContext(InitContext);

  const [timeState, setTimeState] = useState('Overall');
  const [name] = useState(initialUser);
  const [stats, setStats] = useState();
  const [whiteInfo, setWhiteInfo] = useState();
  const [blackInfo, setBlackInfo] = useState();
  const [openingInfo, setOpeningInfo] = useState();

  useEffect(() => {
    updateStats(initialUser);
    // eslint-disable-next-line
  }, [timeState, initialUser]);

  async function updateStats(user) {
<<<<<<< HEAD
    const results = await Stats(user);
    const open = await Openings(user);

    if (!user) {
      console.log('user does not exist');
      return;
=======
    let results = await Stats(user);
    let open = await Openings(user);

    if (!open || !results) {
      results = await Stats('hikaru');
      open = await Openings('hikaru');
      console.log('This user doesnt exist!');
>>>>>>> 6ba50fb5862f7fb65d8db25fbf633553d1854a11
    }

    setOpeningInfo(open);
    setWhiteInfo(results);
    setBlackInfo(results);

    const returnData = (wins, draws, losses) => {
      if (!draws) {
        return [
          { x: 'Wins', y: wins },
          { x: 'Losses', y: losses },
        ];
      } else {
        return [
          { x: 'Wins', y: wins },
          { x: 'Losses', y: losses },
          { x: 'Draws', y: draws },
        ];
      }
    };

    switch (timeState) {
      case 'Overall':
        setStats(results[0].blitzRating);
        setWhiteInfo(
          returnData(
            results[0].whiteWinsOverall,
            results[0].whiteDrawsOverall,
            results[1].whiteLossesOverall
          )
        );
        setBlackInfo(
          returnData(
            results[0].blackWinsOverall,
            results[0].blackDrawsOverall,
            results[1].blackLossesOverall
          )
        );
        break;
      case 'Rapid':
        setStats(results[0].rapidRating);
        setWhiteInfo(
          returnData(
            results[0].whiteWinsRapid,
            results[0].whiteDrawsRapid,
            results[1].whiteLossesRapid
          )
        );
        setBlackInfo(
          returnData(
            results[0].blackWinsRapid,
            results[0].blackDrawsRapid,
            results[1].blackLossesRapid
          )
        );
        break;
      case 'Blitz':
        setStats(results[0].blitzRating);
        setWhiteInfo(
          returnData(
            results[0].whiteWinsBlitz,
            results[0].whiteDrawsBlitz,
            results[1].whiteLossesBlitz
          )
        );
        setBlackInfo(
          returnData(
            results[0].blackWinsBlitz,
            results[0].blackDrawsBlitz,
            results[1].blackLossesBlitz
          )
        );
        break;
      case 'Bullet':
        setStats(results[0].bulletRating);
        setWhiteInfo(
          returnData(
            results[0].whiteWinsBullet,
            results[0].whiteDrawsBullet,
            results[1].whiteLossesBullet
          )
        );
        setBlackInfo(
          returnData(
            results[0].blackWinsBullet,
            results[0].blackDrawsBullet,
            results[1].blackLossesBullet
          )
        );
        break;
      case 'Daily':
        setStats(results[0].dailyRating);
        setWhiteInfo(
          returnData(
            results[0].whiteWinsDaily,
            results[0].whiteDrawsDaily,
            results[1].whiteLossesDaily
          )
        );
        setBlackInfo(
          returnData(
            results[0].blackWinsDaily,
            results[0].blackDrawsDaily,
            results[1].blackLossesDaily
          )
        );
        break;
      default:
        setStats(results[0].blitzRating);
        setWhiteInfo(
          returnData(
            results[0].whiteWinsOverall,
            results[0].whiteDrawsOverall,
            results[1].whiteLossesOverall
          )
        );
        setBlackInfo(
          returnData(
            results[0].blackWinsOverall,
            results[0].blackDrawsOverall,
            results[1].blackLossesOverall
          )
        );
    }
  }

  return (
    <div>
      <div className="enterUser">
        <SearchUser
          name={name}
          setName={setInitialUser}
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
            <WhiteWinrate whiteInfo={whiteInfo} />
          </div>
          <div className="col-lg-4 winrateChart">
            <BlackWinrate blackInfo={blackInfo} />
          </div>
        </div>
        <div className="row openings">
          <DataTable openingInfo={openingInfo} timeState={timeState} />
        </div>
      </div>
    </div>
  );
}

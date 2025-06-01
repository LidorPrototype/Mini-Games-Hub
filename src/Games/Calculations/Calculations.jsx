import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Operator } from './components/operator/operator';
import { Game } from './components/game/game';

export const Calculations = () => {

  const [operatorList, setOperatorList] = useState(['+']);
  const [startGame, setStartGame] = useState(false);

  if(!startGame) {
    return <div>
      <Link to="/" className="back-button" style={{position: "absolute", top: 15, left: 15}}>Back to Home</Link>
      <Operator 
        operatorList={operatorList} setOperatorList={setOperatorList}
        setStartGame={setStartGame}
      />
    </div>
  }

  return <div>
    <Link to="/" className="back-button" style={{position: "absolute", top: 15, left: 15}}>Back to Home</Link>
    <Game operatorList={operatorList} setStartGame={setStartGame} />
  </div>
};
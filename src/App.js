import React from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import Heading from './components/heading/headingComponent';
import PlayBase from './components/playArea/playBase/playBase';

function App() {
  return (
    <div className={style.outer}>
      <Heading>Tic Tac Tao</Heading>
      <PlayBase></PlayBase>
    </div>
  );
}

export default App;

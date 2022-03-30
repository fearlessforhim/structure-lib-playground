import React, {useState} from 'react';
import './App.scss';
import {Button} from 'structure-lib'

function App() {

  let [useDark, setUseDark] = useState(false);

  return (
    <div className={`app-root ${useDark ? `dark` : ``}`}>
      <div className={`page-wrap`}>
        <span
          onClick={() => {setUseDark(false);}}
        >
          Light
        </span>
        <span
          onClick={() => {setUseDark(true);}}
        >
          Dark
        </span>
      </div>
    </div>
  );
}

export default App;

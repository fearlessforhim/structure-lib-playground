import React, {useState} from 'react';
import './App.scss';
import {YesNoToggle, Tabs} from 'structure-lib';
import ButtonsTab from './buttons/ButtonsTab.js';

function App() {

  let [useDark, setUseDark] = useState(false);

  return (
    <div className={`app-root ${useDark ? `dark` : ``}`}>
      <div className={`page-wrap`}>
        <Tabs
          tabs={[
            {
              key: `buttons`,
              title: `Buttons`,
              component: <ButtonsTab/>
            },
            {
              key: `data-input`,
              title: `Data Input`,
              component: <div className={`buttons-component`}/>
            },
          ]}
        />
        <div
          className={`light-dark-toggle`}
        >
          <YesNoToggle
            onIcon={`fa-sun`}
            offIcon={`fa-regular fa-sun`}
            value={useDark}
            onChange={setUseDark}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './data-inputs-tab.scss';
import {SLInput} from 'structure-lib';

export default function DataInputsTab(props) {

  let [myValue, setMyValue] = useState('');

  return <div
    className = {`playground-data-inputs-tab`}
  >
    <div>
      <SLInput
        label={`My Input (Actions Enabled)`}
        value={myValue}
        onChange={setMyValue}
        actions={[
          {
            title: `Click me!`,
            icon: `fa-hammer`,
            onClick: () => {
              console.log(`Clicked hammer!`);
            }
          },
          {
            title: `Click me!`,
            icon: `fa-sun`,
            onClick: () => {
              console.log(`Clicked sun!`);
            }
          }
        ]}
      />
    </div>
    <div>
      <SLInput
        label={`My Input (Actions Disabled)`}
        value={myValue}
        onChange={setMyValue}
        actions={[
          {
            title: `Click me! (disabled)`,
            icon: `fa-hammer`,
            disabled: true,
            onClick: () => {
              console.log(`Clicked hammer!`);
            }
          },
          {
            title: `Click me! (No onClick)`,
            icon: `fa-sun`
          }
        ]}
      />
    </div>

    <div>
      <SLInput
        label={`My Input (Action loading)`}
        value={myValue}
        onChange={setMyValue}
        actions={[
          {
            title: `Click me! (won't trigger)`,
            icon: `fa-hammer`,
            loading: true,
            onClick: () => {
              console.log(`Clicked spinner! (can't get here)`);
            }
          }
        ]}
      />
    </div>
  </div>;
}

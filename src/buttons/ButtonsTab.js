import React from 'react';
import './buttons-tab.scss'
import {Button} from 'structure-lib'

export default function ButtonsTab(props) {

  return <div
    className = {`playground-buttons-tab`}
  >
    <div>
      <Button
        text={`The button`}
      />
    </div>
    <div>
      <Button
        text={`The button`}
        fullWidth
      />
    </div>
  </div>;
}

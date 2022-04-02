import React, {useState} from 'react';
import './buttons-tab.scss'
import {Button, YesNoToggle} from 'structure-lib'

export default function ButtonsTab(props) {

  let [loading, setLoading] = useState(false);
  let [toggleOn, setToggleOn] = useState(false);

  return <div
    className = {`playground-buttons-tab`}
  >
    <Button
      text={`The Button`}
      icon={`fa-hammer`}
      loading={loading}
      onClick={() => {setLoading(true);}}
    />
    <Button
      text={`The Full Width Button`}
      icon={`fa-check`}
      fullWidth
    />
    <Button
      text={`Loading Button`}
      icon={`fa-hammer`}
      loading
    />
    <Button
      text={`Loading Button Full Width`}
      icon={`fa-check`}
      fullWidth
      loading
    />
    <Button
      text={`Disabled Button Full Width`}
      icon={`fa-times-circle`}
      fullWidth
      disabled
    />
    <YesNoToggle
      onIcon={`fa-circle`}
      offIcon={`fa-circle-dot`}
      onText={`Toggle On`}
      offText={`Toggle Off`}
      value={toggleOn}
      onChange={setToggleOn}
    />
    <YesNoToggle
      onIcon={`fa-circle`}
      offIcon={`fa-circle-dot`}
      value={toggleOn}
      onChange={setToggleOn}
    />
    <YesNoToggle
      onIcon={`fa-circle`}
      offIcon={`fa-circle-dot`}
      value={toggleOn}
      onChange={setToggleOn}
      disabled
    />
    <div
    className={`partial-width-div`}
    >
      <YesNoToggle
        onIcon={`fa-circle`}
        offIcon={`fa-circle-dot`}
        value={toggleOn}
        onChange={setToggleOn}
      />
    </div>
  </div>;
}

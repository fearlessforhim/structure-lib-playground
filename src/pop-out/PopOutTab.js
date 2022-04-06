import React, {useState, useRef} from 'react';
import './pop-out-tab.scss';
import {PopOut, Button} from 'structure-lib';

export default function PopOutTab(props) {

  const emptyPopOutRef = useRef(null);
  const popOutRef = useRef(null);

  return <div
    className = {`pop-out-tab`}
  >
    <div
      className={`button-wrap`}
    >
      <Button
        text={`Open Pop Out (No Content)`}
        onClick={() => {
          emptyPopOutRef.current.open();
        }}
      />
    </div>
    <div
      className={`button-wrap`}
    >
      <Button
        text={`Open Pop Out (With Content)`}
        onClick={() => {
          popOutRef.current.open();
        }}
      />
    </div>
    <PopOut
      ref={popOutRef}
      title={`Simple Pop Out`}
      withPad
      showClose
      actions={[
        {
          text: `First Button`,
          onClick: () => {
            console.log(`First button clicked`);
          }
        },
        {
          text: `Loading`,
          loading: true,
          onClick: () => {
            console.log(`Should not get here`);
          }
        },
        {
          text: `Disabled`,
          disabled: true,
          onClick: () => {
            console.log(`Should not get here`);
          }
        },
        {
          text: `Close`,
          onClick: () => {
            console.log(`Close button clicked`);
            popOutRef.current.close();
          }
        }
      ]}
      onClose={() => {
        console.log(`Closed pop out`);
      }}
    >
      Some basic content
    </PopOut>
    <PopOut
      ref={emptyPopOutRef}
      showClose
    />
  </div>;
}

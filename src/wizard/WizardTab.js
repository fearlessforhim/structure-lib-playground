import React, {useState, useRef} from 'react';
import './wizard-tab.scss';
import {Wizard, Button} from 'structure-lib';
import Step1 from './Step1.js';
import Step2 from './Step2.js';

export default function WizardTab(props) {

  const wizardRef = useRef(null);

  return <div
    className = {`wizard-tab`}
  >
    <div
      className={`button-wrap`}
    >
      <Button
        text={`Open Wizard`}
        onClick={() => {
          wizardRef.current.open();
        }}
      />
    </div>
    <Wizard
      ref={wizardRef}
      title={`Simple Wizard`}
      showClose
      steps={[
        {
          title: `Step 1`,
          component: Step1
        },
        {
          title: `Step 2`,
          component: Step2
        }
      ]}
      onComplete={async (wizardData) => {
        console.log('Wizard completed');
        console.log(wizardData);
        wizardRef.current.close();
      }}
    />
  </div>;
}

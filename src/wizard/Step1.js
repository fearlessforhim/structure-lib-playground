import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {SLInput} from 'structure-lib';

export default forwardRef(function Step1(props, ref) {

  let [value1, setValue1] = useState(props.globalData.value1 || '');
  let [value2, setValue2] = useState(props.globalData.value2 || '');

  useImperativeHandle(ref, () => ({
    getStepData() {
      return {
        value1: value1,
        value2: value2
      }
    },
    async getValidationErrors() {
      let err = [];

      if(!value1) {
        err.push('Value 1 cannot be empty');
      }

      if(!value2) {
        err.push('Value 2 cannot be empty');
      }

      return err;
    }
  }), [value1, value2]);

  return (
    <div
      className={`step-1-wrap`}
    >
      <SLInput
        label={'Input value 1'}
        value={value1}
        onChange={setValue1}
      />
      <SLInput
        label={'Input value 2'}
        value={value2}
        onChange={setValue2}
      />
    </div>
  )
});

import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {SLInput} from 'structure-lib';

export default forwardRef(function Step2(props, ref) {

  let [value3, setValue3] = useState(props.globalData.value3 || '');
  let [value4, setValue4] = useState(props.globalData.value4 || '');

  useImperativeHandle(ref, () => ({
    getStepData() {
      return {
        value3: value3,
        value4: value4
      }
    },
    async getValidationErrors() {
      let err = [];

      if(!value3) {
        err.push('Value 3 cannot be empty');
      }

      if(!value4) {
        err.push('Value 4 cannot be empty');
      }

      return err;
    }
  }), [value3, value4]);

  return (
    <div
      className={`step-2-wrap`}
    >
      <div>
        Value 1: {props.globalData.value1}
      </div>
      <div>
        Value 2: {props.globalData.value2}
      </div>
      <div>
        <SLInput
          label={'Input value 3'}
          value={value3}
          onChange={setValue3}
        />
      </div>
      <div>
        <SLInput
          label={'Input value 4'}
          value={value4}
          onChange={setValue4}
        />
      </div>
    </div>
  )
});

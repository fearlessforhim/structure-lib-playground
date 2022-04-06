import React, {useState, useRef, useId, useEffect} from 'react';
import './table-tab.scss';
import {Table, Button} from 'structure-lib';

export default function TableTab(props) {

  let [myData, setMyData] = useState([
    {
        c1: useId(),
        c2: 1,
        c3: useId(),
        c4: useId(),
        c5: 1,
        c6: null
    },
    {
        c1: useId(),
        c2: 3,
        c3: useId(),
        c4: useId(),
        c5: 4,
        c6: null
    },
    {
        c1: useId(),
        c2: useId(),
        c3: useId(),
        c4: null,
        c5: 3,
        c6: null
    }
  ]);

  return <div
    className = {`table-tab`}
  >
    <Button
      text={`Add Row`}
      onClick={() => {
        let myMyData = myData.map(d => d);
        myMyData.push({
          c1: `c1-${myMyData.length}`,
          c2: `c2-${myMyData.length}`,
          c3: `c3-${myMyData.length}`,
          c4: `c4-${myMyData.length}`,
          c5: Math.random(),
          c6: null
        });
        setMyData(myMyData);
      }}
    />
    <Button
      text={`Add 100 Rows`}
      onClick={() => {
        let myMyData = myData.map(d => d);
        for (let i = 0; i < 100; i++) {
          myMyData.push({
            c1: `c1-${myMyData.length}`,
            c2: `c2-${myMyData.length}`,
            c3: `c3-${myMyData.length}`,
            c4: `c4-${myMyData.length}`,
            c5: Math.random(),
            c6: null
          });
        }
        setMyData(myMyData);
      }}
    />
    <div
      className={`table-container`}
    >
        <Table
          columns={[
            {
              headerText: `Column1`,
              key: `c1`
            },
            {
              headerText: `Column2`,
              key: `c2`
            },
            {
              headerText: `Column3`,
              key: `c3`
            },
            {
              headerText: `Column4`,
              key: `c4`
            },
            {
              headerText: `Column5`,
              key: `c5`,
              summaryRenderer: (data, c) => {
                return data.map(d => d.data[c.key]).reduce((a, b) => a + b, 0);
              }
            },
            {
              headerText: `Column6`,
              key: `c6`,
              summaryRenderer: 'Nothing here'
            }
          ]}
          data={myData.map(d => {
            return {
              data: d,
              options: {
                onClick: (d, idx) => {
                  console.log(d);
                  console.log(idx);
                }
              }
            }
          })}
          withSummaryRow
        />
    </div>
  </div>;
}

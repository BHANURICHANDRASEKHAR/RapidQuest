import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default function App() {
  return (
    <div style={{ width: '300px', margin: 'auto', marginTop: '50px' }}>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="This is panel 1" key="1">
          <p>Content of Panel 1</p>
        </Panel>
        <Panel header="This is panel 2" key="2">
          <p>Content of Panel 2</p>
        </Panel>
        <Panel header="This is panel 3" key="3">
          <p>Content of Panel 3</p>
        </Panel>
      </Collapse>
    </div>
  );
}

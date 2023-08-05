import React from 'react';
import { Spin } from 'antd';

const Spinner = () => (
  <Spin
    tip="Deep thoughts with the Deep..."
    size="large"
    style={{ position: 'fixed', top: '50%', transform: 'translateY(-50%)' }}
  >
    <div className="content" />
  </Spin>
);

export default Spinner;

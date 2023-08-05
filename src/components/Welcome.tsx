import React from 'react';
import { Image, Space, Typography } from 'antd';
import LoginButton from './LoginButton';

const Welcome = () => (
  <Space
    align="center"
    direction="vertical"
    style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -80%)',
      width: '100%',
    }}
  >
    <Space align="center" direction="horizontal">
      <Image
        src="https://www.freeiconspng.com/thumbs/brain-icon-png/red-brain-20.png"
        width="126.969px"
      />
    </Space>
    <Space align="center" direction="vertical" size={32}>
      <Space align="center" direction="horizontal">
        <Typography.Title level={1} style={{ margin: '0 2rem' }}>
          Second Brain.
        </Typography.Title>
      </Space>
      <Space align="center" direction="horizontal">
        <LoginButton />
      </Space>
    </Space>
  </Space>
);

export default Welcome;

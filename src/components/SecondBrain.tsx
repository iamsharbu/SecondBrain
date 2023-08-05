import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import Welcome from './Welcome';
import TaskList from './TaskList';

const SecondBrain = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      {!isAuthenticated && <Welcome />}
      {isAuthenticated && <TaskList />}
    </ConfigProvider>
  );
};

export default SecondBrain;

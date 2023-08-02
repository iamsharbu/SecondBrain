/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    isAuthenticated && (
      <Button
        size="large"
        danger
        style={{ alignSelf: 'flex-end' }}
        type="primary"
        onClick={() => logout()}
        icon={<PoweroffOutlined />}
      />
    )
  );
};

export default LogoutButton;

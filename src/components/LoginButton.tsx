/* eslint-disable import/no-extraneous-dependencies */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';

import { Button } from 'antd';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const [loading, setLoading] = useState(false);
  return (
    <Button
      size="large"
      type="primary"
      onClick={() => {
        setLoading(true);
        loginWithRedirect();
      }}
      loading={loading}
    >
      Get Started!
    </Button>
  );
};

export default LoginButton;

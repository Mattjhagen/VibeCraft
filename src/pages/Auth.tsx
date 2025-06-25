import { useState } from 'react';
import AuthForm from '@/components/auth/AuthForm';

const Auth = () => {
  const [mode, setMode] = useState<'signup' | 'login'>('signup');

  const toggleMode = () => {
    setMode(mode === 'signup' ? 'login' : 'signup');
  };

  return <AuthForm mode={mode} onToggle={toggleMode} />;
};

export default Auth;

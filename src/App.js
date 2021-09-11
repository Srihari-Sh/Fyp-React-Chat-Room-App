import { ChatEngine } from 'react-chat-engine';
import React from 'react';

import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const projectID = '29deb639-d228-44ec-9e73-60f3543c1544';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
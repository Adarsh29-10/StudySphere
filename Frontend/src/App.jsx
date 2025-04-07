import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Groups from './pages/Groups';
import Schedule from './pages/Schedule';
import Resources from './pages/Resources';
import Rewards from './pages/Rewards';
import Settings from './pages/Settings';
import SignUpModal from './components/SignUpModal';
import GroupHome from './pages/GroupHome';
import MeetingInterface from './pages/MeetingInterface';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage onSignUp={() => setShowSignUp(true)} />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Groups />} />
          <Route path="groups" element={<Groups />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="resources" element={<Resources />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/group/:groupId" element={<GroupHome />} />
        <Route path="/meeting/:id" element={<MeetingInterface />} />
      </Routes>
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </>
  );
}

export default App;
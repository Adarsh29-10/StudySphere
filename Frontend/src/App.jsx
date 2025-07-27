import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './Dashboard/Dashboard';
import Schedule from './Dashboard/Schedule';
import Resources from './Dashboard/Resources';
import GroupHome from './pages/GroupHome';
import MeetingInterface from './pages/MeetingInterface';
import { useAuth0 } from '@auth0/auth0-react';
import MyGroups from './Dashboard/MyGroups';

function App() {
  const {user, isAuthenticated, isLoading} = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<MyGroups />} />
              {/* <Route path="groups" element={<Groups />} /> */}
              <Route path="schedule" element={<Schedule />} />
              <Route path="resources" element={<Resources />} />
              {/* <Route path="rewards" element={<Rewards />} /> */}
              {/* <Route path="settings" element={<Settings />} /> */}
            </Route>
            <Route path="/group/:groupId" element={<GroupHome />} />
            <Route path="/meeting/:id" element={<MeetingInterface />} />
          </>
        ) : (
          <Route path="/*" element={<LandingPage />} />
        )}
      </Routes>
    </>
  );
}

export default App;
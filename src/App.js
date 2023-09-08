import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AddProfile from './components/Profile/AddProfile';
import UserList from './components/Profile/UserLists';



function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/addProfile" element={<AddProfile />} />
        <Route path="/userlist" element={<UserList />} />
        </Routes>
    </Router>
  );
}

export default App;

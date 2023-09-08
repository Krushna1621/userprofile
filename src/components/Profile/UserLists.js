import React, { useState, useEffect } from 'react';
import classes from './UserList.module.css';

const UserList = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [searchAge, setSearchAge] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    // Fetch user data from a mock API endpoint (replace with your JSON data source)
    fetch('https://crudcrud.com/api/39a574ebda444b6cb4056f5e051b7a71/profile')
      .then((response) => response.json())
      .then((data) => {
        // Ensure data is an array or initialize as an empty array
        setUserProfiles(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error('Error fetching user profiles:', error);
      });
  }, []);

  useEffect(() => {
    // Filter user profiles based on the searchAge
    const filtered = userProfiles.filter((user) => {
      const age = parseInt(user.age);
      return searchAge === '' || age === parseInt(searchAge);
    });
    setFilteredProfiles(filtered);
  }, [searchAge, userProfiles]);

  const handleSearch = () => {
    // Trigger filtering when the search button is clicked
    setFilteredProfiles(userProfiles.filter((user) => {
      const age = parseInt(user.age);
      return searchAge === '' || age === parseInt(searchAge);
    }));
  };

  return (
    <div className={classes.userProfiles}>
      <h1>User Profiles</h1>
      <div className={classes.search}>
        <label>
          Search by Age:
          <input
            type="number"
            value={searchAge}
            onChange={(e) => setSearchAge(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={classes.profileList}>
        {Array.isArray(filteredProfiles) && filteredProfiles.map((user) => (
          <div key={user.id} className={classes.profileCard}>
            <img src={user.image} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phoneNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

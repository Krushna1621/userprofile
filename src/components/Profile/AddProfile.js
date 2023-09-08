import React, { useState } from 'react';
import classes from './AddProfile.module.css';

const AddProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    let queryData = {
      name,
      email,
      phoneNumber,
      age,
      image,
    };

    const response = await fetch(
      'https://crudcrud.com/api/89064c5a504d4905911bb047be89180e/profile',
      {
        method: 'POST',
        body: JSON.stringify(queryData),
        headers: {
          'content-type': 'application/json',
        },
      }
    );

    const data = await response.json();
    console.log(data);

    // Clear input fields
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAge('');
    setImage('');
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.formInside}>
        <h2>Add New Profile</h2>
        <div className={classes.enterVal}>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.enterVal}>
          <label htmlFor='email'>Email Id</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.enterVal}>
          <label htmlFor='phone'>Phone Number</label>
          <input
            id='phone'
            type='telephone'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={classes.enterVal}>
          <label htmlFor='age'>Age</label>
          <input
            id='age'
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className={classes.enterVal}>
          <label htmlFor='image'>Image URL</label>
          <input
            id='image'
            type='text'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default AddProfile;

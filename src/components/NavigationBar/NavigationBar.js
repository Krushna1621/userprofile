import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css'; 

function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/addProfile" className={styles.link}>
            AddProfile
          </Link>
        </li>
        <li>
          <Link to="/userlist" className={styles.link}>
            UserList
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;

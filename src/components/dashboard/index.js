import React from 'react';
import styles from './style.module.css';

const Dashboard = () => (
  <div>
    <input 
      type="text"
      className={styles.search}
      placeholder="Type here the name of a city"
    />
  </div>
)

export default Dashboard;
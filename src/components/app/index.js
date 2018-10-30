import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faTachometerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.css';

import Main from './../main';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.firstColumn}>
          <div className={styles.logo}>
            <FontAwesomeIcon icon={faCloudSun} />
          </div>

          <h1 className={styles.title}>Weather<br />Report</h1>

          <Link to="/" className={styles.link}><span className={styles.icon}><FontAwesomeIcon icon={faTachometerAlt} /></span>Dashboard</Link>
          <Link to="/about" className={styles.link}><span className={styles.icon}><FontAwesomeIcon icon={faInfoCircle} /></span>About</Link>
        </div>
        <div>
          <Main />
        </div>
        
      </div>
    );
  }
}

export default App;

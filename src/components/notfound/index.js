import React from 'react';
import BackArrow from './../backarrow';
import styles from './style.module.css';

const NotFound = (props) => {
  const route = props.location.pathname;

  return (
    <React.Fragment>
      <BackArrow link="/" />
      <p className={styles.errorTitle}>Bummer, no content available at <span>{route}</span>.</p>
    </React.Fragment>
  )
}

export default NotFound;
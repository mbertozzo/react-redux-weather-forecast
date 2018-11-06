import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.css';

const BackArrow = ({ link }) => {
  return (
    <Link to={link} className={styles.backButton}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
  )
} 

export default BackArrow;
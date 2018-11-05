import React from 'react';

import styles from './style.module.css';
import clear from './clear.svg';
import rain from './rain.svg';
import clouds from './cloudy.svg';
import snow from './snow.svg';

const Weather = (props) => {
  const { icon, children } = props;
  const parsedIcon = icon.toLowerCase();

  return (
    <div className={styles.wrapper}>
      {
        (parsedIcon === 'rain') ?
          (<img src={rain} alt={icon} className={styles.icon} />)
          : ('')
      }

      {
        (parsedIcon === 'clouds') ?
        (<img src={clouds} alt={icon} className={styles.icon} />) 
        : ('')
      }

      {
        (parsedIcon === 'clear') ?
        (<img src={clear} alt={icon} className={styles.icon} />) 
        : ('')
      }

      {
        (parsedIcon === 'snow') ?
        (<img src={snow} alt={icon} className={styles.icon} />) 
        : ('')
      }
      <p>{children}</p>
    </div>
  )
}

export default Weather;
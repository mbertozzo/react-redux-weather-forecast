import React from 'react';
import styles from './style.module.css';

import clear from './icons/clear.svg';
import rain from './icons/rain.svg';
import clouds from './icons/cloudy.svg';
import snow from './icons/snow.svg';

const formatDate = (date) => {
  const chunks = date.split('-');
  const monthPos = chunks[1]-1;
  const monthsName = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  return (<div>{chunks[2]}<br />{monthsName[monthPos]}</div>)
}

const getIcon = (weather) => {
  switch(weather.toLowerCase()){
    case 'rain':
      return(<img src={rain} alt={weather} className={styles.icon} />);
    case 'clouds':
      return(<img src={clouds} alt={weather} className={styles.icon} />);
    case 'clear':
      return(<img src={clear} alt={weather} className={styles.icon} />);
    case 'snow':
      return(<img src={snow} alt={weather} className={styles.icon} />);
    default:
      return;
  }
}

const DayCard = (props) => {
  const {highlight, children} = props;
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>
        {
          (highlight.indexOf('-') !== -1) ?
            (formatDate(highlight))
            : (getIcon(highlight))
        }
      </div>
      <div className={styles.link}>
        {children}
      </div>
    </div>
  )
}

export default DayCard;
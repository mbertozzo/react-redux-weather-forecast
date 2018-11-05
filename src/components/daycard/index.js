import React from 'react';
import styles from './style.module.css';

const DayCard = (props) => {
  const {date, children} = props;
  const chunks = date.split('-');
  const monthPos = chunks[1]-1;

  const monthsName = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.date}>
        {chunks[2]}<br />{monthsName[monthPos]}
      </h2>
      <div className={styles.link}>
        {children}
      </div>
    </div>
  )
}

export default DayCard;
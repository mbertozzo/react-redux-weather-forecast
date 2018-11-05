import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.css';
import Weather from './../weather';


const mapStateToProps = (state) => {
  return {
    city: state.place.city,
    forecast: state.forecast
  }
}

class DayForecast extends React.Component {
  render() {
    const { date } = this.props.match.params;
    const { city, forecast } = this.props;

    return (
      <React.Fragment>
        
        <Link to="/" className={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>

        {
          (typeof forecast[date] !== 'undefined') ?
            (
              <React.Fragment>
                <p className={styles.resultsTitle}><span>{city}</span> weather forecast for <span>{date}</span>:</p>
                {
                  forecast[date].map((item, i) => {
                    const time = new Date(item.dt*1000)
                    const hours = ("0" + time.getHours()).slice(-2);
                    const mins = ("0" + time.getMinutes()).slice(-2);
                    
                    const weather = item.weather[0].main;
          
                    return <Weather key={i} icon={weather}>{hours}:{mins}</Weather>
                  })
                }
              </React.Fragment>
            )
            : (
              <p className={styles.resultsTitle}>Sorry, no weather forecast available for this day.</p>
            )
        }
        
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(DayForecast);
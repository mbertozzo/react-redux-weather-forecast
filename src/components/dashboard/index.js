import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePlace } from './../../redux/actions';

import styles from './style.module.css';
import DayCard from './../daycard/';

const mapStateToProps = (state) => {
  return { 
    place: state.place,
    forecast: state.forecast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdatePlace: (city, country) => {
      dispatch(updatePlace(city, country));
    }
  }
}

class Dashboard extends React.Component {
  formatTimestamp (timestamp) {
    const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septmber', 'October', 'November', 'December']

    const date = new Date(timestamp*1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${monthsName[month]} ${day}, ${year}`;
  }

  
  render() {
    const {place, forecast, handleUpdatePlace} = this.props;

    return (
      <React.Fragment>
        <input 
          type="text"
          className={styles.search}
          placeholder="Type here the name of a city and press enter [ie. London, UK]"
          onKeyPress={(e) => {
            if(e.charCode === 13){
              const query = e.target.value.split(',');
              handleUpdatePlace(query[0],query[1])
            }
          }}
        />

        {
          (Object.keys(forecast).length !== 0) ?
            (
              <React.Fragment>
                <p className={styles.resultsTitle}>Currently available weather forecast for <span className={styles.cityName}>{place.city || 'City'}</span>:</p>
                <div className={styles.results}>
                  {
                    Object.keys(forecast).map((date, i) => (
                      <Link to={"/forecast/" + date} className={styles.link} key={i}>
                        <DayCard date={date}>
                          View forecast
                        </DayCard>
                      </Link>
                    ))
                  }
                </div>
              </React.Fragment>
            )
            : ('')
        }
        
      </React.Fragment>
    )
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Dashboard);
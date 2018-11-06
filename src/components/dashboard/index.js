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
                        <DayCard highlight={date} hover>
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
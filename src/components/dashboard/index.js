import React from 'react';
import { connect } from 'react-redux';
import { updatePlace } from './../../redux/actions';

import styles from './style.module.css';
import Forecast from './../forecast';

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
      <div>
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
          (place.city) ?
            (<p><span className={styles.cityName}>{place.city}</span> Weather Forecast</p>)
            : ('')
        }
        
        {
          Object.keys(forecast).map((date,i) => (
            <Forecast key={i} day={date} data={forecast[date]} />
          ))
        }        
      </div>
    )
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Dashboard);
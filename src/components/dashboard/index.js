import React from 'react';
import { connect } from 'react-redux';
import { updatePlace } from './../../redux/actions';

import styles from './style.module.css';

const mapStateToProps = (state) => {
  return { place: state.place }
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
    const {place, handleUpdatePlace} = this.props;

    return (
      <div>
        <input 
          type="text"
          className={styles.search}
          placeholder="Type here the name of a city"
          onBlur={() => {
            handleUpdatePlace('London','UK')
          }}
        />
        <p>{place.city} and {place.country}</p>
      </div>
    )
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Dashboard);
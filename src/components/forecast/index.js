import React from 'react';

const Forecast = (props) => {
  const { day, data } = props;

  return (
    <React.Fragment>
      <h4>Day {day}</h4>

      {
        data.map(item => {
          const time = new Date(item.dt*1000)
          const hours = ("0" + time.getHours()).slice(-2);
          const mins = ("0" + time.getMinutes()).slice(-2);
          
          const weather = item.weather[0].main;

          return React.createElement(
            'p',
            null,
            `Forecasted <b>${weather}</b> at ${hours}:${mins}`
          )  
        })
      }
    </React.Fragment>
  )
}

export default Forecast;
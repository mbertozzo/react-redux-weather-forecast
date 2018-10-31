import React from 'react';

import Weather from './../weather';

const Forecast = (props) => {
  const { day, data } = props;

  return (
    <React.Fragment>
      <h4>Day {day}</h4>

      {
        data.map((item, i) => {
          const time = new Date(item.dt*1000)
          const hours = ("0" + time.getHours()).slice(-2);
          const mins = ("0" + time.getMinutes()).slice(-2);
          
          const weather = item.weather[0].main;

          return <Weather key={i} icon={weather}>{hours}:{mins}</Weather>

          // return React.createElement(
          //   'p',
          //   {key: i},
          //   `Forecasted ${weather} at ${hours}:${mins}`
          // )  
        })
      }
    </React.Fragment>
  )
}

export default Forecast;
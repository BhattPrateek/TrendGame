import React from 'react';
import { Chart } from 'react-google-charts'

export default class Chart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options:{
        title: 'Trend Popularity Graph'
        hAxis: 
        vAxis:
        legend:
      }
    }
  }
  render () {
    return (
      <div>
        <Chart
          chartType="LineChart"
          data= {[], }
        />
      </div>
    );
  }
}

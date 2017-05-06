import React from 'react';
import TrendChart from './Chart';
import Input from './Input';
import ArticleList from './ArticleList';

export default class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }  
  render () {
    return (
      <div>
        <h2>This is the Body</h2>
        <Input/>
        <TrendChart chartData = {this.props.chartData}/>
        <ArticleList/>
      </div>
    );
  }
}

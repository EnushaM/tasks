import './App.css';
import React from 'react';

class App extends React.Component{
  constructor (props)
  {
    super(props);
    this.state={x1:2,x2:3,y1:4,y2:5};
  }
  changex1=()=>
  {
    this.setState({x1:"3"});
  }
  changey1=()=>
  {
    this.setState({y1:"6"});
  }      
  changex2=()=>
  {
    this.setState({x2:"8"});
  }      
  changey2=()=>
  {
    this.setState({y2:"9"});
  }   
  changeall=()=>
  {
    this.setState({x1:"6",y1:"7",x2:"8",y2:"9"});
  }
  render(){
    var x1=this.state.x1;
    var x2=this.state.x2;
    var y1=this.state.y1;
    var y2=this.state.y2;
    var dis=Math.pow((x1-x2),2)+Math.pow((y1-y2),2)
    return (
      <div>
        <button onClick={this.changex1}>Change X1</button>
        <button onClick={this.changey1}>Change Y1</button>
        <button onClick={this.changex2}>Change X2</button>
        <button onClick={this.changey2}>Change Y2</button>
        <button onClick={this.changeall}>Change all</button>
        <h3>Distance between two points(({x1},{y1}),({x2},{y2})):({dis})</h3>
      </div>
    );
  }
}
export default App;

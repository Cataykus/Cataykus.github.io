import React from "react";

export default class ItemStatusFilter extends React.Component{
  constructor(){
    super();
    this.state = {
      btns: [true, false, false]
    };
    this.onButtonChange = (text) => {
      const { onFilterMode } = this.props;
      onFilterMode(text);
    };
    this.onButtonClick = (id) =>{
      this.setState(({btns}) => {
        btns = [false, false, false];
        btns[id] = true;
        return {
          btns: btns
        }
      })
    };
  }
  render(){
      return (
        <div className="btn-group">
          <button type="button"
                  className={this.state.btns[0] ? "btn btn-info" : "btn btn-outline-secondary"} 
                  onClick = { () => { this.onButtonChange("all"); this.onButtonClick(0) } }>All</button>
          <button type="button"
                  className={this.state.btns[1] ? "btn btn-info" : "btn btn-outline-secondary"} 
                  onClick = { () => { this.onButtonChange("active"); this.onButtonClick(1) } }>Active</button>
          <button type="button"
                  className={this.state.btns[2] ? "btn btn-info" : "btn btn-outline-secondary"} 
                  onClick = { () => { this.onButtonChange("done"); this.onButtonClick(2) } }>Done</button>
        </div>
      );
  }
}



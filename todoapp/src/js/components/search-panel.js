import React from 'react';

export default class SearchPanel extends React.Component {
  constructor() {
    super();

    this.onLabelChange = (e) => {
      const { onFilter } = this.props;
      onFilter(e.target.value); 
    };
  }
  render() {
    return (
      <input type="text" className="form-control search-input"
        placeholder="Type to search ..." onChange = { this.onLabelChange }/>
    );
  };
};

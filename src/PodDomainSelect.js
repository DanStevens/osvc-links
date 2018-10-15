import React, { Component } from 'react';

export default class PodDomainSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podDomain: props.podDomain
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      podDomain: e.target.value
    }, () => this.props.onChange(this));
  }

  render() {
    return (
      <div className="PodDomainSelect">
        <label>Pod Domain:</label>
        <select onChange={this.handleChange} value={this.state.podDomain}>
          <option>custhelp.com</option>
          <option>rightnowdemo.com</option>
          <option>cx.ukg.oraclecloud.com</option>
        </select>
      </div>
    );
  }
}
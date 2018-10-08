import React, { Component } from 'react';
import './App.css';
import getConfig from './config.js';
import SiteInfo from './SiteInfo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteInfo: new SiteInfo('example__pro', 'example_en'),
      config: getConfig()
    };
  };

  render() {
    let siteInfo = this.state.siteInfo;
    let groups = this.state.config.groups.map(group => {
      let subGroups = group.subGroups ? group.subGroups.map(subGroup => {
        return (
          <h3>{subGroup.label}</h3>
        );
      }) : null;
      return (
        <>
          <h2>{group.label}</h2>
          {subGroups}
        </>
      );
    });
    return (
      <div className="App">
        <h2>Site Info</h2>
        <p>Site Name: {siteInfo.siteName}</p>
        <p>Interface Name: {siteInfo.intfName}</p>
        <p>Suffix: {siteInfo.suffix}</p>
        <p>Host Name: {siteInfo.hostName}</p>
        {groups}
      </div>
    );
  }
}

export default App;

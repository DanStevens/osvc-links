import React, { Component } from 'react';
import './App.css';
import SiteInfo from './SiteInfo';
import { ResourceGrid, Resource } from './Resources';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteInfo: new SiteInfo('example__pro', 'example_en'),
    };
  };

  render() {
    let siteInfo = this.state.siteInfo;
    
    return (
      <div className="App">
        <h2>General URLs</h2>
        <ResourceGrid>
          <Resource siteInfo={siteInfo} siteInfoProp="baseUri" label="Base URI" />
          <Resource siteInfo={siteInfo} siteInfoProp="cpRoot" label="Customer Portal root" />
        </ResourceGrid>
      </div>
    );
  }
}

export default App;

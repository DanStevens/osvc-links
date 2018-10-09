import React, { Component } from 'react';
import './App.css';
import SiteInfo from './SiteInfo';
import SiteInfoForm from './SiteInfoForm';
import { ResourceGrid, Resource } from './Resources';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteInfo: new SiteInfo('example__pro', 'example_en'),
    };
  };

  siteInfoChanged(propName, value) {
    let newSiteInfo = this.state.siteInfo.copy();
    newSiteInfo[propName] = value;
    this.setState({
      siteInfo: newSiteInfo
    });
  }

  render() {
    let siteInfo = this.state.siteInfo;
    
    return (
      <div className="App">
        <SiteInfoForm siteInfo={siteInfo} siteInfoChanged={this.siteInfoChanged.bind(this)}/>

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

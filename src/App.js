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
          <Resource siteInfo={siteInfo} siteInfoProp="cpHome" label="Customer Portal home" />
          <Resource siteInfo={siteInfo} siteInfoProp="cpAdmin" label="Customer Portal administration" />
          <Resource siteInfo={siteInfo} siteInfoProp="cpAbout" label="Customer Portal about page" />
          <Resource siteInfo={siteInfo} siteInfoProp="launchPage" label="Launch page" />
          <Resource siteInfo={siteInfo} siteInfoProp="installer" label="ClickOnce Installer" />
          <Resource siteInfo={siteInfo} siteInfoProp="scriptsRoot" label="Custom Scripts root" />
          <Resource siteInfo={siteInfo} siteInfoProp="restApiRoot" label="REST API root" />
        </ResourceGrid>

        <h2>Soap URLs</h2>
        
        <h3>August 2017+ SOAP URLs</h3>
        <ResourceGrid>
          <Resource siteInfo={siteInfo} siteInfoProp="connectApiWsdl" label="Connect web service WSDL" />
          <Resource siteInfo={siteInfo} siteInfoProp="connectApiWsdl1_2" label="Connect web service WSDL (version 1.2)" />
          <Resource siteInfo={siteInfo} siteInfoProp="kfApiWsdl" label="Knowledge Foundation web service WSDL" />
          <Resource siteInfo={siteInfo} siteInfoProp="chatApiWsdl" label="Chat web service WSDL" />
        </ResourceGrid>
        
        <h3>Legacy SOAP URLs</h3>
        <ResourceGrid>
          <Resource siteInfo={siteInfo} siteInfoProp="legacyConnectApiWsdl" label="Connect web service WSDL" />
          <Resource siteInfo={siteInfo} siteInfoProp="legacyConnectApiWsdl1_2" label="Connect web service WSDL (version 1.2)" />
          <Resource siteInfo={siteInfo} siteInfoProp="legacyKfApiWsdl" label="Knowledge Foundation web service WSDL" />
          <Resource siteInfo={siteInfo} siteInfoProp="legacyChatApiWsdl" label="Chat web service WSDL" />
        </ResourceGrid>

        <h2>Other Resources</h2>
        <ResourceGrid>
          
        </ResourceGrid>
      </div>
    );
  }
}

export default App;

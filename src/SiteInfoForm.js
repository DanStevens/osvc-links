import React, { Component } from 'react';
import SiteInfo from './SiteInfo';
import './SiteInfoForm.css';
import PodDomainSelect from './PodDomainSelect';

export default class SiteInfoForm extends Component {
  constructor(props) {
    super(props);

    this.siteInfo = props.siteInfo || new SiteInfo('example__pro', 'example_en');

    this.state = {
      siteName:  this.siteInfo.siteName,
      intfName:  this.siteInfo.intfName,
      vhost:  this.siteInfo.vhost,
      podDomain:  this.siteInfo.podDomain
    };

    this.siteNameChanged = this.siteNameChanged.bind(this);
    this.intfNameChanged = this.intfNameChanged.bind(this);
    this.vhostChanged = this.vhostChanged.bind(this);
    this.podDomainChanged = this.podDomainChanged.bind(this);
  }

  siteNameChanged(e) {
    this.setState({
      siteName: e.target.value
    }, () => this.props.siteInfoChanged('siteName', this.state.siteName));
  }

  intfNameChanged(e) {
    this.setState({
      intfName: e.target.value
    }, () => this.props.siteInfoChanged('intfName', this.state.intfName));
  }

  vhostChanged(e) {
    this.setState({
      vhost: e.target.value
    }, () => this.props.siteInfoChanged('vhost', this.state.vhost));
  }

  podDomainChanged(e) {
    this.setState({
      podDomain: e.state.podDomain
    }, () => this.props.siteInfoChanged('podDomain', this.state.podDomain));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   let hasChanged = false;

  //   this.siteInfo.siteName = this.state.siteName;
  //   this.siteInfo.intfName = this.state.intfName;
  //   this.siteInfo.vhost = this.state.vhost;
  //   this.siteInfo.podDomain = this.state.podDomain;

  //   if (hasChanged) this.props.siteInfoChanged(this.siteInfo);
  // }

  render() {
    return (
      <div className="SiteInfoForm">
        <div>
          <label>Site name (including suffix):</label>
          <input onChange={this.siteNameChanged} defaultValue={this.state.siteName} />
        </div>

        <div>
          <label>Interface name:</label>
          <input onChange={this.intfNameChanged} defaultValue={this.state.intfName} />
        </div>

        <div>
          <label>Virtual Hostname (blank for none):</label>
          <input onChange={this.vhostChanged} defaultValue={this.state.vhost} />
        </div>

        <PodDomainSelect onChange={this.podDomainChanged} defaultValue={this.state.podDomain} />
      </div>
    );
  }
}
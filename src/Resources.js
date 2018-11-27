import React from 'react';
import './Resources.css';
import isUrl from 'is-url';

export function ResourceGrid(props) {
  return (
    <div className="ResourceGrid">
      {props.children}
    </div>
  );
}

export function Resource(props) {
  let resource;
  // Special 'siteInfoProp' for linking to this app using the give site info
  if (props.siteInfoProp === 'osvcLinks') {
    resource = `${window.location.href.split('?')[0]}?site=${props.siteInfo.siteName}` +
               `&intf=${props.siteInfo.intfName}&host=${props.siteInfo.vhost}`;
  } else {
    resource = props.siteInfo[props.siteInfoProp];
  }
  return (
    <div className="Resource">
      <ResourceCore label={props.label} resource={resource} />
    </div>
  );
}

class ResourceCore extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.inputOnFocus = this.inputOnFocus.bind(this);
    this.copyRequested = this.copyRequested.bind(this);
  }

  inputOnFocus(e) {
    e.target.select();
  }

  copyRequested(e) {
    e.preventDefault();
    this.textInput.current.select();
    document.execCommand("copy");
  }
  
  render() {
    const labelContent = isUrl(this.props.resource) ?
      <a href={this.props.resource} target="_blank" rel="noopener noreferrer">{this.props.label}</a> :
      <>{this.props.label}</>;
    return (
      <>
        <label className="Resource-Label">{labelContent}</label>
        <input className="Resource-Input" readOnly type="text" value={this.props.resource} onFocus={this.inputOnFocus}
               ref={this.textInput}/>
        <a href="#" className="Resource-CopyLink" onClick={this.copyRequested} title="Copy to clipboard">Copy</a>
      </>
    );
  }
}
import React from 'react';
import './Resources.css';

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
    <ResourceCore label={props.label} resource={resource} />
  );
}

function ResourceCore(props) {
  return (
    <>
      <label className="Resource-Label">{props.label}</label>
      <input className="Resource-Input" readOnly type="text" value={props.resource}/>
    </>
  );
}
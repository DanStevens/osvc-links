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
    <ResourceCore label={props.label} resource={resource} />
  );
}

function ResourceCore(props) {
  const labelContent = isUrl(props.resource) ?
    <a href={props.resource} target="_blank" rel="noopener noreferrer">{props.label}</a> :
    <>{props.label}</>;
  return (
    <>
      <label className="Resource-Label">{labelContent}</label>
      <input className="Resource-Input" readOnly type="text" value={props.resource}/>
    </>
  );
}
import React from 'react';

export default function LinkLabel(props) {
  return (
    props.excludeAnchor ?
      <>{props.text}</> :
      <a href={props.href} target="_blank" rel="noopener noreferrer">{props.text}</a>
  );
}
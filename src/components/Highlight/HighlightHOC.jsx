import React from 'react';
import New from './New';
import Popular from './Popular';

function HighlightHOC(props) {
  function switchViews(x) {
    if (x <= 100) return <New>{props.children}</New>;
    if (x >= 1000) return <Popular>{props.children}</Popular>;
    return props.children;
  }

  return switchViews(props.views);
}

export default HighlightHOC;

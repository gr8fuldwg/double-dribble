import React from 'react';

function FullPageView(props) {
    return (
      <div style={{ height: '100vh ' }}>
      {props.children}
      </div>
    );
  }

export default FullPageView;
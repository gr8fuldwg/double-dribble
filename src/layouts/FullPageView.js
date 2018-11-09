import React from 'react';
import PropTypes from 'prop-types';
function FullPageView(props) {
    return (
      <div style={{ height: '100vh ' }}>
      {props.children}
      </div>
    );
  }

FullPageView.propTypes = {
  children: PropTypes.array.isRequired
};

export default FullPageView;
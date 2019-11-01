import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// same as using "|| Loading..."" in the props.message line
// more "elegant solution"
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;

import React from 'react';

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui basic green button">Yay</div>
        <div className="ui basic red button">Nay</div>
      </div>
    </div>
  );
};

export default ApprovalCard;

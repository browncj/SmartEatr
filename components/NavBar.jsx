import React from 'react';

const navBar = React.createClass({
  render: function(){
    return(
      <nav className="top-bar">
        <h4>
          <a target="_blank" href="https://github.com/browncj/SmartEatr">
            SmartEatr
          </a>
        </h4>
      </nav>
    );
  }
});

export default navBar;

// react selected cow class
import React from 'react';
class SpecCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none', 
    }
  }

  helperN(){
    if (this.props.cow === undefined) {
      return '';
    } else {
      return this.props.cow.name;
    }
    
  }
  helperD(){
    if (this.props.cow === undefined) {
      return '';
    } else {
      return this.props.cow.description;
    }
    
  }

  render() {
    return (
      <li className='specCow'>
       <h2>{this.helperN()}</h2>
       <div className='cowdescription'>{this.helperD()}</div>
      </li>
    );
  }
}

export default SpecCow;
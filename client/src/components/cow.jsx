// react individual cow class
import React from 'react';
class Cow extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandle(event){
    console.log('click cow');
    this.props.selectCow(this.props.cow.id);
  }

  render() {
    return (
      <li className='cowitem' onClick={this.clickHandle.bind(this)}>
       <h2>{this.props.cow.name}</h2>
      </li>
    );

  }
}

export default Cow;
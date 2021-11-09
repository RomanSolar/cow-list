import React from 'react';
import Cow from './cow';

// react cow list class
class Cowlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        { this.props.cowlist.map((cow) => 
          <Cow  cow={cow} selectCow={this.props.selectCow}/>
        )
        }
      </ul>
    );
  }

}

export default Cowlist;
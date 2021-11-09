
import React from 'react';
class InputCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      description: '',
    };
  }

  onChangeName(event) {
    this.setState({name: event.target.value});

  }
  onChangeDesc(event) {
    this.setState({description: event.target.value});
  }

  onButton(event) {
    event.preventDefault();
    this.props.addFunction(this.state.name, this.state.description);
  }

  render() {
    return (
      <div>
        <form > 
          <span>
            <input type="text" id="cowname" onChange={this.onChangeName.bind(this)}/>
            <div>Cow Name</div>
          </span>
          <span>
            <input type="text" id="cowdesc" onChange={this.onChangeDesc.bind(this)}/>
            <div>Description</div>
          </span>
          <input type="button" id="cowbutton" value="Add Cow" onClick={this.onButton.bind(this)}/>
        </form>
      </div>
    );
  }

  // functions


}

export default InputCow;
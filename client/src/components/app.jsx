// react main app
import React from 'react';
import Cowlist from './cowlist';
import InputCow from './inputcow';
import SpecCow from './specialCow';


class CowApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowlist: [],
      selected: undefined,
    };
  }

  render() {
    return (
      <div>
        <h2 className= 'title'>Cows go Moo</h2> 
        <div className= 'headcow'>
          <SpecCow cow={this.state.selected}/>
        </div>   
        <div className= 'adder'>
          <InputCow addFunction={this.addCow.bind(this)}/>
        </div>
        <div className= 'list'>
          <Cowlist cowlist={this.state.cowlist} selectCow={this.selectCow.bind(this)}/>
        </div>    
        <div>

        </div>
      </div>
    );

  }

  addCow(cowname, desc) {
    console.log(cowname);
    var newcow = JSON.stringify({name: cowname,description: desc});
    console.log(newcow);

    fetch (
      '/api/cows', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: newcow,
      }
    ).then((res) => this.getCows(this));
  }


  selectCow(cowid) {
    for (var i = 0; i < this.state.cowlist.length; i++) {
      if (this.state.cowlist[i].id === cowid) {
        this.setState({'selected':this.state.cowlist[i]});
      }
    }


  };

  componentDidMount() {
    console.log('mounted app')
    this.getCows(this);
  }
  // functions

  getCows(cowapp) {
    fetch('/api/cows').then(
      (res) => {
        console.log('cow app comp did mount get');
        res.json().then(function(data) {
          // console.log(data);
          cowapp.setState({'cowlist':data});
        });
        
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

export default CowApp;
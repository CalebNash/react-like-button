import React from 'react';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numLike: 0,
      plural: 'Likes'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let count = this.state.numLike;
    console.log(count);
    count += 1;
    this.setState({numLike: count});

    if(count === 1){
      this.setState({plural: 'Like'});
    }else{
      this.setState({plural: 'Likes'});
    }
 }


  render() {
    return (
      <div className='container'>
      <button className='likes' onClick = {this.handleClick}> {this.state.numLike} {this.state.plural} < /button>
      </div>
    )
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      userData: {},
      followers: [],
    };
  }

  componentDidMount(){
    console.log('Mount is running')
    axios
    .get(`https://api.github.com/users/ryan-webdev`)
    .then(res => {
      console.log(res)
      this.setState({userData: res.data})
    })
    .catch(err => console.log('something went wrong', err))

    axios
    .get(`https://api.github.com/users/Ryan-webdev/followers`)
    .then(res => {
      console.log(res)
      this.setState({followers: res.data})
    })
    .catch(err => console.log('something went wrong', err))
  }

  

  render(){ 
  return (
    <div className="App">
      <header className="App-header">
        <UserCard userData={this.state.userData}/>
        <FollowerCard followers={this.state.followers} />
      </header>
    </div>
  );
  }
}

export default App;

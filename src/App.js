import React , { Component } from 'react';
import './App.css';
import { CardList } from './components/cardlist-component.jsx';
import { SearchBox } from './components/searchbox-component.jsx';

class App extends Component{
  constructor(){
    super();

    this.state = {
      users: [],
      searchField: ''
    };
  }
  
  componentDidMount(){
    fetch('https://reqres.in/api/users')
    .then( response => response.json())
    .then( userlist => this.setState( {users : userlist.data} ));
  }
  
  
  render(){
    const { users, searchField} = this.state;
    const filteredUsers = users.filter( user => 
      user.first_name.toLowerCase().includes(searchField.toLowerCase())
      )
  return (
    <div className="App">
       <h1> Users </h1>
       <SearchBox
        placeHolder = 'Search Users'
        handleChange = { e => this.setState( {searchField : e.target.value} ) }
       />
       <CardList users = { filteredUsers} />
    </div>
  );
}
}

export default App;

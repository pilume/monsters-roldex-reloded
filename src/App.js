import React, {Component} from 'react'
import './App.css';
import CardList from './components/card-list/card-list.components'
class App extends Component {
  constructor(){
  super()
  this.state = {
    monsters:[],
    searchField:''
  }

}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(users => users.json())
      .then(users => this.setState({monsters: users}))
  }  


  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(mons => mons.name.toLowerCase().includes(searchField.toLowerCase())) 


    return (
      <div className='App'>
        <input type='search' placeholder='search monsters' onChange={event => this.setState({searchField: event.target.value}) }/>
        <CardList mons={filteredMonsters}/>
      </div>
    )
  }
}

export default App
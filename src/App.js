import React, {Component} from 'react'
import './App.css';
import CardList from './components/card-list/card-list.components'
import SearchBox from './components/search-box/search-box.components'
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
  handleChange =(event) => {
    this.setState({searchField:event.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(mons => mons.name.toLowerCase().includes(searchField.toLowerCase())) 


    return (
      <div className='App'>
        <h1>Monsters Roladex</h1>
        <SearchBox placeholder= "search monsters" 
        handleChange={this.handleChange}/>
        <CardList mons={filteredMonsters}/>
      </div>
    )
  }
}

export default App
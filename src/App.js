// import { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchValue, setSearchValue] = useState('');
  const [title, setTitle] = useState('MANO MONSTRACIJA');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchValue)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchValue])

  const onSearchChange = (e) => {
    const searchValueString = e.target.value.toLocaleLowerCase();
    setSearchValue(searchValueString)
  }

  const onTitleChange = (e) => {
    const titleString = e.target.value.toLocaleLowerCase();
    setTitle(titleString)
  }

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className='search-box'
        placeholder='Ieskok'
        onChangeHandler={onSearchChange}
      />
      <SearchBox
        className='search-box'
        placeholder='Keisti Title'
        onChangeHandler={onTitleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchValue: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (e) => {
//     const searchValue = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchValue }
//     })
//   }

//   render() {

//     const { monsters, searchValue } = this.state
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchValue)
//     })

//     return (
//       <div className="App">
//         <h1 className="app-title">MANO MONSTRACIJA</h1>
//         <SearchBox
//           className='search-box'
//           placeholder='Ieskok'
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;

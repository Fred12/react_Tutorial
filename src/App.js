import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      { id:'1', name: 'Max', age: 28 },
      { id:'2', name: 'Manu', age: 29 },
      { id:'3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    textLength: 0,
    inputFieldText: [],
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].id:'', name = 'Maximilian';
    this.setState({
      persons: [
        { id:'1', name: newName, age: 28 },
        { id:'2', name: 'Manu', age: 29 },
        { id:'3', name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons= [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler =(personIndex) => {
    //const persons = this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  textLengthHandler = (event) => {
    const text = event.target.value;
    const textArray= text.split('');
    const textLenght = textArray.length;
    this.setState({
      inputFieldText: textArray,
      textLength: textLenght
    })
  }


  deleteLetter = (index) => {
    const newArray = [...this.state.inputFieldText];
    newArray.splice(index,1);
    const textLength = newArray.length;
    this.setState({
      inputFieldText: newArray,
      textLength: textLength
    })
  }


  render() {
    const mystyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let charList = null;

    if (this.state.textLength > 0) {
      charList = (        
        <div>
          {
            this.state.inputFieldText.map((letter,index) => {
              return <CharComponent
                letter = {letter}
                deleteOnClick = {() => this.deleteLetter(index)}                
              ></CharComponent>
            })
          }
        </div>        
      )
    }

    let inputField = (
    <div>
      <input type="text" value={this.state.inputFieldText.join('')} onChange={(event) => this.textLengthHandler(event)}></input>
      <p>Your text has the length: {this.state.textLength}</p>
      <ValidationComponent textLength = {this.state.textLength}></ValidationComponent>
      {charList}
    </div>
    )

    let persons = null;

    if(this.state.showPersons) {
      persons= (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event,person.id)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {inputField}
        <button 
        style={mystyle}
        onClick={this.togglePersonsHandler}>Switch Name</button>  
        {persons}   
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

//FUNCTION HOOKS with useState:
// const app = props => {
//   const [personsState, setPersonsState] = useState(
//     {
//       persons: [
//         {
//           id:'', name: "Max",
//           age: 29
//         },
//         { 
//           id:'', name: "Marc",
//           age: 32
//         }
//       ],
//       otherState: "some other value"
//     }
//   );

//   const switchNameHandler = () => {    
//     setPersonsState({
//       persons: [
//         {
//           id:'', name: "Maximilian",
//           age: 29
//         },
//         { 
//           id:'', name: "Marc",
//           age: 32
//         }
//       ]
//     });
//   }




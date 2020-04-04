import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state={
        chars: ''
    }

    textChangeHandler = (event) => {
        this.setState({chars: event.target.value});
    }

    deleteTextHandler = (charIndex) => {
        const text = this.state.chars.split('');
        text.splice(charIndex, 1);
        const updatedText = text.join('');
        this.setState({chars: updatedText});
    }

  render() {
    
    let chars = this.state.chars.split('').map((char, index) => {
                return <Char
                    clicked = {() => this.deleteTextHandler(index)}
                    text={char}
                    key={index}
                    />
            });

    // if(this.state.chars.length > 0){
    //     chars = (<div>
    //         {this.state.chars.map((char, index) => {
    //         return <CharComponent 
    //             text={char}
    //             key={index}
    //             />
    //     })}
    //     </div>)
    // }

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.textChangeHandler(event)} 
        value={this.state.chars}/>
    <p>{this.state.chars}</p>
        <Validation textLength={this.state.chars.length} />
        {chars}
      </div>
    );
  }
}

export default App;

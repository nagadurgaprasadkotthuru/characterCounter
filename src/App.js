import {Component} from 'react'

import {v4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {wordsList: [], inputValue: ''}

  onAddButtonClicked = event => {
    event.preventDefault()
    const {inputValue} = this.state
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, {id: v4(), word: inputValue}],
      inputValue: '',
    }))
  }

  onChangeInputValue = event => this.setState({inputValue: event.target.value})

  renderListsView = eachWordDetails => {
    const {id, word} = eachWordDetails
    return (
      <li className="list-element" key={id}>
        <p className="word">
          {word}: {word.length}
        </p>
      </li>
    )
  }

  render() {
    const {inputValue, wordsList} = this.state
    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="counter-container-heading">
            Count the characters like a Boss...
          </h1>
          {wordsList.length !== 0 ? (
            <ul className="lists-container">
              {wordsList.map(eachItem => this.renderListsView(eachItem))}
            </ul>
          ) : (
            <div className="image-container">
              <img
                className="no-user-inputs-image"
                alt="no user inputs"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              />
            </div>
          )}
        </div>
        <form
          className="input-element-container"
          onSubmit={this.onAddButtonClicked}
        >
          <h1 className="input-element-container-heading">Character Counter</h1>
          <div className="input-add-button-container">
            <input
              type="text"
              className="input-element"
              value={inputValue}
              placeholder="Enter the Characters here"
              onChange={this.onChangeInputValue}
            />
            <button className="add-button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default App

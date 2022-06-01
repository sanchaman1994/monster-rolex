import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((user) => this.setState({ monster: user }))
    );
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monster, searchField } = this.state;
    const filteredMonsters = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Roledex</h1>
        {/* Search Box  */}
        <SearchBox
          handlechange={this.handleChange}
          placeholder="Search Monster"
        />
        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}

export default App;

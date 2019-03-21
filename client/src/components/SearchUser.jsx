import React, { Component } from "react";
import "../assets/css/SearchUser.css";

class SearchUser extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleInputChanged = event => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <form className="searchUser" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleInputChanged}
          placeholder="Find your Guru"
        />
        <input type="submit" value="I'm lucky!" />
      </form>
    );
  }
}

export default SearchUser;

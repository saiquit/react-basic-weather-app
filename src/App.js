import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Navbar from "./components/Navbar";
import OutPut from "./components/Output";

class App extends React.Component {
  state = {
    weather: {},
    query: "",
  };

  async componentDidMount() {
    const getWeather = await fetch(
      `http://api.weatherstack.com/current?access_key=92bd5a2a2324f61c773ee0f18708a4dd&query=Dhaka}`,
    )
      .then((res) => res.json())
      .then((result) => this.setState({ weather: result }));
    this.setState({ query: "" });
  }

  handleSearch = async (e) => {
    e.preventDefault();
    const getWeather = await fetch(
      `http://api.weatherstack.com/current?access_key=92bd5a2a2324f61c773ee0f18708a4dd&query=${this.state.query}`,
    )
      .then((res) => res.json())
      .then((result) => this.setState({ weather: result }));
    this.setState({ query: "" });
  };
  render() {
    return (
      <div className="App">
        <div className="inp-field">
          <form onSubmit={this.handleSearch}>
            <input
              type="search"
              value={this.state.query}
              placeholder="Enter Your Area"
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  query: e.target.value,
                });
              }}
            />
          </form>
        </div>
        <OutPut className="output" data={this.state.weather} />
      </div>
    );
  }
}

export default App;

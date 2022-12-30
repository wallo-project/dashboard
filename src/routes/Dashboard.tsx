import axios from "axios";
import React, { useState, Component } from "react";
import Header from "../components/header/Header";

export default class Dashboard extends Component {
  
  public state: { speed: Number };
  public interval: any;

  constructor(props: any) {
    super(props);
    this.state = { speed: 0 };
  }

  public fetchData() {
    axios.get("http://127.0.0.1:8000/")
    .then(response => {
      this.setState({speed: response.data.counter});
    })
  }

  public componentDidMount(): void {
    //this.interval = setInterval(this.fetchData.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    return (
      <>
        <div className="min-h-screen text-black dark:text-white">
          <Header title="Dashboard" />
          <main>
            <p>{String(this.state.speed)}</p>
          </main>
        </div>
      </>
    );
  }
}

import './App.css';
import React, { Component } from 'react'
import Nav from './components/Nav'
import Me from './components/Me'
import { Route } from 'react-router-dom';
import AboutMe from './components/AboutMe'
import ProjectsContainer from './components/ProjectsContainer'
import { fetchData } from './apiCalls'


class App extends Component {
  constructor() {
    super();
    this.state = {
      projectData: [],
      error: false
    }
  }

  componentDidMount = () => {
    fetchData()
      .then(data => this.setState({ projectData: data.projectData }))
      .catch(err => this.setState({ error: true}))
  }

  render() {
    console.log('1', this.state.error)
    return (
      <div>
        <Route exact path="/" render={() => 
          <> 
            <Nav /> 
            <Me /> 
          </> 
        } 
        />
        <Route exact path="/aboutme" component={ AboutMe } />
        <Route exact path="/projects" render={() => <ProjectsContainer projectData={this.state.projectData} errorState={this.state.error}
        />} />
      </div>
    )
  }
}

export default App;
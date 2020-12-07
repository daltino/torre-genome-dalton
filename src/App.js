import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import axios from 'axios';
import * as _ from 'lodash'

class App extends Component {
  state = {};

  componentDidMount() {
    const API = 'https://bio.torre.co/api/bios';
    axios.get(`${API}/daltonwhyte`)
        .then(response => {
          this.setState(response.data);
          this.setState({
            'facebook': _.find(this.state.person.links, ['name', 'facebook']),
            'blog': _.find(this.state.person.links, ['name', '']),
            'linkedin': _.find(this.state.person.links, ['name', 'linkedin']),
            'twitter': _.find(this.state.person.links, ['name', 'twitter']),
            'instagram': _.find(this.state.person.links, ['name', 'instagram']),
            'gitlab': _.find(this.state.person.links, ['name', 'gitlab']),
            'github': _.find(this.state.person.links, ['name', 'github'])
          });
          console.log(this.state);
        });
  }

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          {this.state.person && this.state.facebook
            ?
              <>
                <Sidebar
                  picture={this.state.person.picture}
                  name={this.state.person.name}
                  email={this.state.person.email}
                  facebook={this.state.facebook}
                  blog={this.state.blog}
                  instagram={this.state.instagram}
                  linkedin={this.state.linkedin}
                  twitter={this.state.twitter}
                  gitlab={this.state.gitlab}
                  github={this.state.github}>
                </Sidebar>
                <div id="colorlib-main">
                  <Introduction
                    bgImage={this.state.person.picture}
                    summary={this.state.person.summaryOfBio}
                    socialLinks={this.state.person.links}
                    linkedin={this.state.linkedin}
                    blog={this.state.blog}
                    github={this.state.github}
                    firstName={this.state.person.name.split(' ')[0]}>
                  </Introduction>
                  <About
                    summary={this.state.summaryOfBio}
                    skills={this.state.strengths}></About>
                  <Timeline
                    experiences={this.state.experiences}></Timeline>
                </div>
              </>
            :
              <div>Loading Genome Data...</div>
          }
      	</div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines'
import Home from './layout/Home/index'
import Stuff from './layout/Stuff';
import Resume from './layout/Resume';
import Work from './layout/Work';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route render={({ location }) => {
            const { pathname, key } = location

            return(
              <TransitionGroup component={null}>
                <Transition
                key={key}
                appear={true}
                onEnter={(node, appears) => play(pathname, node, appears)}
                onExit={(node, appears) => exit(node, appears)}
                timeout={{enter: 750, exit: 0}}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={Resume} />
                    <Route path="/projects" component={Stuff} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/personnal" component={Work}/>
                  </Switch>
                </Transition>
              </TransitionGroup>
            )}} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

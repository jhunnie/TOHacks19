import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Homescreen from './homescreen';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: []
    }
  }

  componentWillMount() {
    let homePage = [];
    homePage.push(<Homescreen appContext={this} />)
    this.setState({
        currentScreen: homePage
    })
  }
  render() {
    return (
      <div>
        <AppBar position="static" style={{
          alignItems: 'center',
          position: 'center',

        }}>
          <Toolbar>
            <a href='/' style={{"color": "white"}}><Typography variant="h6">
              (D)Clutter and (D)onate
            </Typography></a>
          </Toolbar>
        </AppBar>
        {this.state.currentScreen}
      </div>
    );
  }
}

export default App;
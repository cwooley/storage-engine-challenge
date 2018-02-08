import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Image, Menu, Icon } from 'semantic-ui-react';
import ServersList from './components/ServersList';
import TopMenu from './components/TopMenu';
import BottomMenu from './components/BottomMenu';
import './App.css';

class App extends Component {

  render() {
    var gridStyle = {
      width:'100%',
      height: '100%',
      backgroundColor: '#000000',
    };

    var rowTopStyle = {
      paddingBottom: 0,
    }
    var rowStyle = {
      paddingTop: 0,
      paddingBottom: 0,
    }
    var productionStyle = {
      marginLeft: '50%'
    }

    return (
      <div className="body">
        <Grid >
          <Grid.Row style={rowTopStyle}>
            <TopMenu />
          </Grid.Row>
          <Grid.Row style={rowStyle}>
            <BottomMenu />
          </Grid.Row>
          <Grid.Row style={{...rowStyle, backgroundColor: '#FAFAFA'}} >
            <div style={{marginLeft:50, marginRight:50, width: '100%'}}>
              <h1 style={{color:'grey', paddingTop:20, paddingBottom:10}}>Servers</h1>
              <ServersList />
            </div>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

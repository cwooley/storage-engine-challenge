import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Image, Menu, Icon } from 'semantic-ui-react';
import ServersList from './components/ServersList';
import './App.css';

class App extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    var gridStyle = {
      width:'100%',
      height: '100%',
      backgroundColor: '#000000',
    };

    var menuStyle = {
      width: '100%'
    }
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

    const { activeItem } = this.state

    return (
      <div className="body">
        <Grid >
          <Grid.Row style={rowTopStyle}>
            <Menu borderless style={menuStyle} >
              <Menu.Item position={"left"} >
                <Icon name='ellipsis horizontal' size='large' style={{marginLeft:10, marginRight:10}}/>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yiXNE7kEemvWApuphU4LxUNToU6XsM-8accZ2s15uMs3yyH4mg' avatar />
                <p style={{color:'grey', fontWeight:'bold', fontSize:20, marginLeft:10}}>Stealth Cloud</p>
              </Menu.Item>
              <Menu.Item style={{margin:'auto'}}>
                <p style={{color:'green', fontWeight:'bold', fontSize:20, paddingRight:16}}>PRODUCTION</p>
              </Menu.Item>
              <Menu.Item
                position={'right'}
              >
                <a style={{paddingRight:10, fontSize:20}}>Support</a>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yiXNE7kEemvWApuphU4LxUNToU6XsM-8accZ2s15uMs3yyH4mg' avatar />
              </Menu.Item>
            </Menu>
          </Grid.Row>
          <Grid.Row style={rowStyle}>
            <Menu style={menuStyle} color="blue" inverted widths={7}>
              <Menu.Item
                name='Insights'
                active={activeItem === 'insights'}
                onClick={this.handleItemClick}
              >
                <Icon name='bar graph' size='large' />
                Insights
              </Menu.Item>

              <Menu.Item
                name='Declarations'
                active={activeItem === 'declarations'}
                onClick={this.handleItemClick}
              >
                <Icon name='legal' size='large' />
                Declarations
              </Menu.Item>

              <Menu.Item
                name='Workloads'
                active={activeItem === 'workloads'}
                onClick={this.handleItemClick}
              >
                <Icon name='unordered list' size='large' />
                Workloads
              </Menu.Item>

              <Menu.Item
                name='Networks'
                active={activeItem === 'Networks'}
                onClick={this.handleItemClick}
              >
                <Icon name='treatment' size='large' />
                Networks
              </Menu.Item>

              <Menu.Item
                name='Servers'
                active={activeItem === 'Servers'}
                onClick={this.handleItemClick}
              >
                <Icon name='sliders' size='large' />
                Servers
              </Menu.Item>

              <Menu.Item
                name='Security'
                active={activeItem === 'Security'}
                onClick={this.handleItemClick}
              >
                <Icon name='lock' size='large' />
                Security
              </Menu.Item>

              <Menu.Item
                name='Settings'
                active={activeItem === 'Settings'}
                onClick={this.handleItemClick}
              >
                <Icon name='setting' size='large' />
                Settings
              </Menu.Item>
            </Menu>
          </Grid.Row>
          <Grid.Row style={{...rowStyle, backgroundColor: '#FAFAFA'}} >
            <div style={{marginLeft:50, marginRight:50, width: '100%'}}>
              <h1>Servers</h1>
              <ServersList>

              </ServersList>
            </div>

          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

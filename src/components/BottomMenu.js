import React, {Component} from 'react';
import { Image, Menu, Icon } from 'semantic-ui-react';

export default class BottomMenu extends Component{
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    
    return(
      <Menu style={{width:'100%'}} color="blue" inverted widths={7}>
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
    )
  }


}

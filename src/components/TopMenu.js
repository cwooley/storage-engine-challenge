import React, {Component} from 'react';
import { Image, Menu, Icon } from 'semantic-ui-react';

export default class TopMenu extends Component{
  render(){
    return (
      <Menu borderless style={{width:'100%'}} >
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
          <Image style={{marginRight:10}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yiXNE7kEemvWApuphU4LxUNToU6XsM-8accZ2s15uMs3yyH4mg' avatar />
        </Menu.Item>
      </Menu>
    )
  }
}

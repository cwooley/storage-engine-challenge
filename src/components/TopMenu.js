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
        <Menu.Item style={{marginRight:90}}>
          <p style={{color:'green', fontWeight:'bold', fontSize:20, paddingRight:16, textAlign:'center'}}>PRODUCTION</p>
        </Menu.Item>
        <Menu.Item
          position={'right'}
        >
          <a style={{paddingRight:10, fontSize:20}}>Support</a>
          <Image style={{marginRight:10, borderRadius:2}} src='https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/19667823_10155576185331579_5655974443043484940_o.jpg?oh=92af44f5b5452fe90960ff036b25e430&oe=5B232D79' avatar />
        </Menu.Item>
      </Menu>
    )
  }
}

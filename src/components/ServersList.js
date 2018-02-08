import React, {Component} from 'react';
import { Icon, Table, Input } from 'semantic-ui-react';
import servers from './servers';
import ServerListItem from './ServerListItem';

export default class ServersList extends Component {

  state = {
    searchTerm: ''
  }

  handleSearchChange = (event)=>{
    console.log(event.target.value)
    this.setState({searchTerm: event.target.value} )
  }

  filterServers = () => {
    return servers.filter((server)=>{
      return server.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  renderServers = () => {
    return this.filterServers().map((server)=>{
      return <ServerListItem
        name={server.name}
        lastBackup={server.lastBackup}
        recoveryObjectivePlan={server.recoveryObjectivePlan}
        workloads={server.workloads}
      />
    })
  }

  render(){
    return(
      <div>
        <Input
          style={{width:'100%', paddingBottom:0}}
          icon={{ name: 'search', circular: true, link: true }}
          iconPosition='left'
          placeholder='Find a server...'
          onChange={(event)=>this.setState({searchTerm: event.target.value})}
        />
        <Table style={{width: '10'}} celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>STATUS</Table.HeaderCell>
              <Table.HeaderCell>NAME</Table.HeaderCell>
              <Table.HeaderCell>LAST BACKUP</Table.HeaderCell>
              <Table.HeaderCell>RECOVERY OBJECTIVE PLAN</Table.HeaderCell>
              <Table.HeaderCell>WORKLOADS</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderServers()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

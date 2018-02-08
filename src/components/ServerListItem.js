import React, {Component} from 'react';
import { Icon, Table, Input } from 'semantic-ui-react'

export default class ServerListItem extends Component {
  render(){
    return (
      <Table.Row>
        <Table.Cell>
          <div style={{backgroundColor:'green', borderRadius: '50%', width:20, height:20}}></div>
        </Table.Cell>
        <Table.Cell>
          <a>{this.props.name}</a>
        </Table.Cell>
        <Table.Cell>
          <a>{this.props.lastBackup}</a>
        </Table.Cell>
        <Table.Cell>
          <a>{this.props.recoveryObjectivePlan}</a>
        </Table.Cell>
        <Table.Cell>
          <a>{this.props.workloads}</a>
        </Table.Cell>
      </Table.Row>
    )
  }
}

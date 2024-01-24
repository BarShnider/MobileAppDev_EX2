import { Component } from 'react'

export default class CCTable extends Component {
    constructor(props){
        super(props)
        this.state = {width: '100%'}
    }
  render() {
    return (
      <div>
        <table border={1} style={{width: this.state.width}} onClick={() => this.setState({width: '100%'})} onDoubleClick={() => this.setState({width: '50%'})}>
            <tbody>

            <tr>
                <td>💰</td>
                <td>💰</td>
                <td>💰</td>
            </tr>
            <tr>
                <td>🦆</td>
                <td>🦆</td>
                <td>🦆</td>
            </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

import { Component } from 'react'

export default class CCButtons extends Component {
    constructor(props){
        super(props)
        this.colorArr = ['red','blue','green','pink','yellow','orange','brown','grey']
        this.state = {currColor: 'beige'}
    }
  render() {
    
    return (
      <div className={`container`}>
        <div className='wrapper' style={{backgroundColor: this.state.currColor}}>
            {this.colorArr.map((color) => <button onClick={() => this.setState({currColor: color})} key={color}>{color}</button>)}
        </div>
      </div>
    )
  }
}

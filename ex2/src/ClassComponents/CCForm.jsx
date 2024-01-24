import { Component } from 'react'

export default class CCForm extends Component {
    constructor(props){
        super(props)
        this.state = {firstnameMessage : "" , lastnameMessage:"", scoreMessage:"", scoreBelowMessage : ""}
    }

    handleBlur = () => {
        this.setState({firstnameMessage : "", lastnameMessage : "", scoreMessage : ""})
    }
    
    handleScoreBlur = (e) => {
        this.handleBlur()
        if(Number(e.target.value) > 555 ){
            this.setState({scoreBelowMessage : "You can be accepeted!"})
        }
        else{
            this.setState({scoreBelowMessage : "you are below our requirements, please try again next year"})
        }
    }
  render() {
    return (
        <div className='form-container'>

            <form action="">
                <div>
                <p className='message'>{this.state.firstnameMessage}</p>
                First Name: <input type="text" onBlur={this.handleBlur} onFocus={() =>this.setState({firstnameMessage: "Please enter first name"})} /> 
                </div>
                <div>
                <p className='message'>{this.state.lastnameMessage}</p>
                Last Name:<input type="text" onBlur={this.handleBlur} onFocus={() =>this.setState({lastnameMessage: "Please enter last name"})} />
                </div>
                <div> 
                <p className='message'>{this.state.scoreMessage} </p>
                Score: <input type="text" onBlur={this.handleScoreBlur} onFocus={() =>this.setState({scoreMessage: "Please enter score"})} />
                <p className='message'>{this.state.scoreBelowMessage}</p>
                </div>
            </form>
        </div>
    )
  }
}

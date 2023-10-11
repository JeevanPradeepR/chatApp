import { Component } from "react";
import PropsExample from "./props";
class DemoTest extends Component{
constructor(){
    super()
    this.state = {change:'component', inputValue:'', displayValue:''}
}
handleChange = () =>{
    this.setState({change:'value'})
}
handleUndo=()=>{
    this.setState({change:'component'})
}
handleInput=(e)=>{
    this.setState({inputValue:e.target.value})
}
handleDisplay=()=>{
    this.setState({displayValue: this.state.inputValue})
}
    render(){
        return(<div>
            Hai iam demo {this.state.change}
            <br/>
            <button onClick={this.handleChange}>Change value</button>
            <div onClick={this.handleUndo}>click me aswell</div>

            <input onChange={this.handleInput}></input>
           <button onClick={this.handleDisplay}>Click me display next line</button>
<br/>
                {this.state.displayValue}
                {/* {this.state.inputValue} */}
            <br/>
            <PropsExample newPropsValue={this.state.displayValue} secondValue={this.state.inputValue}/>
        </div>)
    }
}


export default DemoTest;
import { Component } from "react";

class PropsExample extends Component{
    constructor(props){
        super(props)
        this.props = props;
    }
    render(){
        return(<div>
            <br/>
            <br/>
            -------------------------------------------------------------<br/>
            Hai aim props {this.props.newPropsValue}
            <br/>
            {this.props.secondValue}

        </div>)
    }
}
export default PropsExample
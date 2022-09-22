
import { Component } from "react";
import Counter from "./Counter";
import logRender from '../Decorators/logRender'

interface CountProps{
    initialValue?: number
}

interface CounterState {
    value: number
}

@logRender
export default class Counter2 extends Component <CountProps, CounterState>{

    state = {value: this.props.initialValue || 0}

    private setValue = (delta: number)=>{
        this.setState({
            value: this.state.value + delta
        })
    }

    render(){
        return(
            <div>
                <Counter counter={this.state.value}/>
                <button onClick={()=> this.setValue(10)}>
                    +
                </button>
                <button onClick={()=> this.setValue(-10)}>
                    -
                </button>
            </div>
        )
    }
}

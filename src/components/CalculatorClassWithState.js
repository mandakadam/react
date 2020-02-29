import React, { Component } from 'react';
/* eslint no-eval: 0 */

class CalculatorClassWithState extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: ""
        }
    }
    setResult(e){
        this.setState({
            data: this.state.data + e.target.value
        })
    }
    evalResult(){
        try{
            this.setState({
                data: String(eval(this.state.data)).length > 3  
                        && String(eval(this.state.data)).includes('.') 
                            ? String(eval(this.state.data).fixed(4)) 
                            : String(eval(this.state.data))
            })
          }
          catch(err){
            this.setState({ data:"Error"});
          }
        
    }

    render(){
        const { data } = this.state;
        const calcButtons = [];
        const calcButtonsList = [0,1,2,3,4,5,6,7,8,9,'.'];
    
        calcButtonsList.forEach(item=>{
            calcButtons.push(
            <button key={`button_${item}`} value={item} onClick={e=>{this.setState({data: data +e.target.value})}}>{item}</button>
            )
        })
        return(
        <div className="container">
            
                    <div className="result">{data}</div>

                    <div className="wrapper">
                            <div  className="">
                                <div  className="digits flex ">
                                    {calcButtons}
                                </div>
                                <div  className="modifiers subgrid">
                                    <button onClick={e=> this.setState({data:data.substr(0,data.length - 1 )})}>Clear</button>
                                    <button onClick={e=> this.setState({data:''})}>AC</button>
                                </div>
                            </div>
                                
                        
                        <div  className="operations subgrid">
                            <button value="+" onClick={e=>{this.setResult(e)}}>+</button>
                            <button value="-" onClick={e=>{this.setResult(e)}}>-</button>
                            <button value="*" onClick={e=>{this.setResult(e)}}>*</button>
                            <button value="/" onClick={e=>{this.setResult(e)}}>/</button>
                            <button value="=" onClick={()=>this.evalResult()}>=</button>
                        </div>
                        </div>
        </div>
        )
    }
}

export default CalculatorClassWithState;
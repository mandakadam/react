import React, {useState} from 'react';
/* eslint no-eval: 0 */

function CalculatorFunctionWithHooks(){
    const [data, setData] = useState('');
    const calcButtons = [];
    const calcButtonsList = [0,1,2,3,4,5,6,7,8,9,'.'];

    calcButtonsList.forEach(item=>{
        calcButtons.push(
        <button key={`button_${item}`} value={item} onClick={e=>{setData(data+e.target.value)}}>{item}</button>
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
        <button onClick={e=> setData(data.substr(0,data.length -1 ))}>Clear</button>
        <button onClick={e=> setData('')}>AC</button>
        </div>  
        </div>
        <div  className="operations subgrid">
        <button value="+" onClick={e=>{setData(data+e.target.value)}}>+</button>
        <button value="-" onClick={e=>{setData(data+e.target.value)}}>-</button>
        <button value="*" onClick={e=>{setData(data+e.target.value)}}>*</button>
        <button value="/" onClick={e=>{setData(data+e.target.value)}}>/</button>

       
        <button 
        value="="
        onClick={e=>{
            try{
                setData(
                    (String(eval(data)).length > 3 && String(eval(data)).includes('.'))
                    ? 
                    String(eval(data).toFixed(4)) 
                    : 
                    String(eval(data))
                )
            }
            catch(err){
                console.log(err)
            }
        }}
        >
        =
        </button>

  
    </div>
    </div>
    </div>
    )
}

export default CalculatorFunctionWithHooks;
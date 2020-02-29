import React, {useState} from 'react';
/* eslint no-eval: 0 */

function Calculator(){
    const [data, setData] = useState("");
    const calcButtons = [];

    const calcButtonsList = [0,1,2,3,4,5,6,7,8,9,".","/","%"];
    calcButtonsList.forEach(item=>{
        calcButtons.push(
            <button 
            onClick={ e=>{ setData(data+e.target.value)}  } 
            key={`button-_${item}`}
            value={item}
            >
            {item}
            </button>
        )
    })

    return(
        <div>
               {data}
               <br />
               <br />
               {calcButtons} 
               <button onClick={e=>{ setData(data.substr(0, data.length-1))}}>Clear</button>
               <button onClick={e=>{setData("")}}>AC</button>

               <button value="+" onClick={e=>{setData(data + e.target.value)}}>+</button>
               <button value="-" onClick={e=>{setData(data + e.target.value)}}>-</button>
               <button value="*" onClick={e=>{setData(data + e.target.value)}}>*</button>
               <button value="/" onClick={e=>{setData(data + e.target.value)}}>/</button>


              <button value="=" onClick={e=>{
                  try{
                    setData(
                        String(eval(data)).length > 3  &&
                        String(eval(data)).includes('.') ? String(eval(data).fixed(4)) 
                        : String(eval(data))
                    )
                  }
                  catch(err){
                    setData("Error")
                  }

                  console.log(e.target.value)
              }}>=</button>
        </div>
    )
}

export default Calculator;
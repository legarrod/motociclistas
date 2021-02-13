import React,{useEffect, useState} from 'react'

export default function Cell({horas, setCount, count}) {
    const [hoursCopy, setHoursCopy] = useState(horas);
let counterClick = 0; 
    
    const handlerSelectButton = (e, item)=>{
         
        setHoursCopy(hoursCopy.map(function(dato){     
                 
            if(dato.value === e.target.value){
                dato.select = !item.select;  
               
            } 
            return dato;
          } ))
   
        count < 9 && setCount(count - 1)  

    }


    
console.log(count);  


    return (
    <div className='flex flex-col'>
            {
                horas.map((item, index)=><button key={index}className={`btn my-2 ${item.select ? "bg-green-800" : "bg-blue-800"}  w-56 h-14`} onClick={(e)=>handlerSelectButton(e, item)} value={item.value}>{item.value}</button>)
            }
       
    </div>
    )
}

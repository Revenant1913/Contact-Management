import React, {  useState }  from 'react';

const Edit = () => {

    const [data, setData] = useState(null);
    const [num, setNum] = useState(null);
    const [numDisplay, setNumDisplay] = useState(false);
    const [display, setDisplay] = useState(false);
    const [input, setInput] = useState(false);
    const [btn, setBtn] = useState(true);
    const [editBtn, setEditBtn] = useState(false);
    const [numBtn, setNumBtn] = useState(false);
    

    const getData = (val) =>{
        setData(val.target.value)  
        setDisplay(false) 
    }

    const getNum = (num) =>{
        setNum(num.target.value)
        setNumDisplay(false)
    }
    

   const name = () => {
    return( <div>
        
            <input type ='text' onChange={getData}/>
            <button className='btn btn-primary' onClick={() =>{setDisplay(true); setEditBtn(false);}}>Add Name</button>

    </div>)
   }

   const number = () =>{
    return(
        <div>
        <input type ='number' onChange={getNum}/>
            <button className='btn btn-primary' onClick={() =>{setNumDisplay(true); setNumBtn(false);}}>Add Number</button>
        </div>)
   }

   const vanish = () => {
    return (
    <div>
    <button classname='btn btn-warning' onClick={() => {setInput(true); setBtn(false); setEditBtn(true); setNumBtn(true)}}>Add Contact</button>
    </div>
   )} 

    return(
        <div class="d-flex justify-content-center">
            {display? <h1>{data}</h1> :null}
            {numDisplay? <h1>{num}</h1> :null}
            {(input && editBtn)? name() :null}
            {(input && numBtn)? number() :null}
            {btn? vanish() :null}
        </div>
    )    
}
export default Edit;


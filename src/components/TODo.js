import React, { Children, useState } from 'react'


export default function TODo() {
  // useState
    const [array,setarray]=useState([])
const [text,settext]=useState()
// addTodo
const addtodo=()=>{
  let newobj={}
  newobj.text=text
  setarray([...array,newobj])
    // settext(null)
}
// delete Todofunction
const deleteTodo=(ele)=>{
     setarray((prevTodo)=>{
      return prevTodo.filter((element)=>{ 
        return element!==ele;
      })

     })
}
    return (
        
      <>
      <div className='main-div'>
        <div >
            <img src='https://media.istockphoto.com/id/1363214013/photo/to-do-list-on-wooden-desk.webp?b=1&s=170667a&w=0&k=20&c=AZvWb8qjMAU8eYuRVr0HzV-kKijaWj6V71eeuleiVo8='  />
        </div>
        <div >
              {/* eventfunction */}
            <input onChange= 
            {(e)=>{settext(e.target.value)}} value={text} />
            <button onClick=
            {addtodo}>+</button>
            {/* conditionpath */}
          {  array?array.map((ele)=>{
            return <>

            <p >{ele.text}</p>
            <button onClick=
            {()=>{deleteTodo(ele)}}>x</button>

            



            </>

            }):null}
             
            
        </div>
        </div>
      </>
  )
}

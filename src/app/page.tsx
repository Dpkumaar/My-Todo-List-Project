"use client"
import React,{ useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const[desc, setdesc] = useState("")
  const [mainTask,setMainTask] = useState([]) 

  const submitHandler = (e)=>{
      e.preventDefault()
      setMainTask([...mainTask, {title, desc}]);
      settitle("")
      setdesc("")
      console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

 if (mainTask.length>0) {
  renderTask = mainTask.map((t, i) => {
    return (
      <li>
        <div id='res'>
        <h5>{t.title}</h5>
        <h6>{t.desc}</h6>
      </div>
      <button onClick={() =>{
                deleteHandler(i)
                }}>Delete</button>
      </li>
    );
    });
  
 }
 
  return (
    <>
        <h1>Pradeep's Todo List</h1>

        <form onSubmit={(submitHandler)}>
              <input type="text"  placeholder='Enter Your Title'  value={title}
              onChange={(e)=>{
                settitle(e.target.value)
              }} required/>

              <input type='text' placeholder='Enter Your Description' value={desc}
              onChange={(e)=>{
                setdesc(e.target.value)
              }} required/> 

              <button type='submit '>Add Task</button>
        </form>

        <hr/>

        <div>
          <ul>{renderTask}</ul>
        </div>
    
    </>
  )
}

export default page
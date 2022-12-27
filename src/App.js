import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import React, { useState,useEffect } from "react";

function App({task}) {
  const [ ShowAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async() => {
      const res = await fetch("http://localhost:5000/tasks");
            const data =  await res.json();

      console.log(data)
    }
    fetchTasks();
  },[])
//Add Task
const addTask = (task) => {
  console.log(task)
   const id = Math.floor(Math.random() * 10000) +1
  const newTask = { id, ...task };
 setTasks([...tasks, newTask]);
}
  //Delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id));
  }
  
  //Toggle Reminder
  const toggleReminder = (id) =>{ 
    setTasks(tasks.map(task => task.id === id ? 
      {...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="container">
      <Header onAdd ={() => setShowAddTask(!ShowAddTask)}
      ShowAdd={ShowAddTask}
      />
      {ShowAddTask && <AddTask onAdd={addTask}
      />}
      <>
       {
        tasks.length > 0 ? tasks.map((item )=> (
        <Task 
        key={item.id} 
        task={item} 
        onDelete={ deleteTask }
        onToggle={toggleReminder}
        />)) : 
       " NO TASKS TO SHOW"
       }
       </>
      
    </div>
  );
}



export default App;

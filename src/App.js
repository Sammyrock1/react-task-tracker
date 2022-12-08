import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: " Doctor Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: " Meeting At School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: " Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Toggle Reminder
  const toggleReminder = (id) =>{ 
    console.log(id)
     setTasks(
       tasks.map((task) => task.id === id ? 
     {...task,reminder: !task.reminder} : task))
  }
  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}/> :
       " NO TASKS TO SHOW"}
    </div>
  );
}


export default App;

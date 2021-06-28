import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const[tasks, setTasks]=useState([{
    id: 1,
    text: 'Doktor',
    day:'Feb 5th at 2:30',
    reminder:false
  },{
    id: 2,
    text: 'Masaza',
    day:'Feb 6th at 2:30',
    reminder:true
  },

  ])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

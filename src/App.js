import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doktor',
    day: '2021-06-21 u 12:30',
    reminder: false
  }, {
    id: 2,
    text: 'Masaza',
    day: '2021-06-30 u 16:30',
    reminder: true
  },

  ])
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  const reminder = (id) => {
    setTasks(tasks.map((task)=>task.id==id ?{...task,reminder:!task.reminder}:task))
    
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} /> : 'No tasks'}
    </div>
  );
}

export default App;

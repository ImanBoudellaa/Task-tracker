import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doktor',
    day: 'Feb 5th at 2:30',
    reminder: false
  }, {
    id: 2,
    text: 'Masaza',
    day: 'Feb 6th at 2:30',
    reminder: true
  },

  ])
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks'}
    </div>
  );
}

export default App;

import { useState } from 'react';

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Vet appointment',
            day: '08 October at 2:00pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Vet appointment',
            day: '15 October at 4:00pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Vet appointment',
            day: '03 October at 10:00am',
            reminder: false,
        }
    ]
)
    //Delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
    //Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder } : task
      ))
    }

  return (
    <div className="App">
      <Header title="Task Manager"/>
      {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks at this moment'}
    </div>
  );
}

export default App;

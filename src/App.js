import { useState } from 'react';

import { Header } from "./components/Header";
import { Task } from "./components/Task";


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
  return (
    <div className="App">
      <Header title="Task Manager"/>
      <Task  tasks={tasks}/>
    </div>
  );
}

export default App;

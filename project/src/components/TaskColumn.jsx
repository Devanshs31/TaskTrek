import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = ({title, tasks, status, handleDelete}) => {
  return (
    <section className="task_column">
      <h2 className='task_column_heading'>
        {title}
      </h2>
      {
        tasks.map((task, index) => {
          if (task.status === status) {
            return (
              <TaskCard key={index} 
                        task={task} 
                        title={task.task} 
                        tags={task.tags}
                        handleDelete={handleDelete}
                        index={index} />
            )
          }
          return null;
        })
      }
    </section>
  )
}

export default TaskColumn

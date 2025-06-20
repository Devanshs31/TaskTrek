import React, {use, useState} from 'react'
import './TaskForm.css'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {

    // const [task, setTask] = useState('')
    // const [status, setStatus] = useState('todo')

    // const handleTaskChange = (e) => {
    //     setTask(e.target.value)
    // }
    // const handleStatusChange = (e) => {
    //     setStatus(e.target.value)
    // }

    const [taskData, setTaskData] = useState({
        task: '',
        status: 'todo',
        tags: []
    });

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag);

    }

    const selectTag = (tag) => {
        if(taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag);
            setTaskData(prev => {
                return {...prev, tags: filterTags}
            })
        }
        else {
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]}
            })
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setTaskData(prev => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks(prev => {
            return [...prev, taskData];
        })

        setTaskData({
            task: '',
            status: 'todo',
            tags: []
        });
    }

  return (
    <header className="app_header">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" 
                   name='task'
                   value={taskData.task}
                   className="task_input" 
                   placeholder='Enter your tasks'
                   onChange={handleChange}
            />

            <div className="task_form_bottm_line">
                <div>
                    <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
                    <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
                    <Tag tagName="Javascript" selectTag={selectTag} selected={checkTag("Javascript")} />
                    <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
                </div>
                
                <div>
                    <select name="status" id="" className="task_status" onChange={handleChange} value={taskData.status}>
                        <option value="todo">To Do</option>
                        <option value="doing">Doing...</option>
                        <option value="done">Done</option>
                    </select>

                    <button type='submit' className="task_submit">
                        + Add Task
                    </button>
                </div>
            </div>
        </form>
    </header>

  )
}

export default TaskForm

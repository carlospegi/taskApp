import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../models/task.class'
import { LEVELS } from '../models/levels.enum';
import '../styles/task.scss'
const TaskComponent = ({ task, complete, deleted }) => {

  useEffect(() => {
    console.log('created task!')
    return () => {
      console.log(`task: ${task.name} is goin to unmount`);
    };
  }, [task]);


  function taskLevelBudge() {
    switch (task.level) {
      case LEVELS.NORMAL: return (
        <h6 className='mb-0' >
          <span className='budge bg-primary' >
            {task.level}
          </span>
        </h6>
      )
      case LEVELS.URGENTE: return (
        <h6 className='mb-0' >
          <span className='budge bg-warning' >
            {task.level}
          </span>
        </h6>
      )
      case LEVELS.BLOCKING: return (
        <h6 className='mb-0' >
          <span className='budge bg-danger' >
            {task.level}
          </span>
        </h6>
      )

      default:
        break;
    }
  }

  function taskIconCompleted() {

    if (task.completed) {
      return <i onClick={() => complete(task)} class="bi-toggle-on task-action" style={{ color: 'green' }}></i>
    } else {
      return <i onClick={() => complete(task)} class="bi-toggle-off task-action" style={{ color: 'grey' }}></i>
    }
  }

const taskCompleted = {
  color: 'gray',
  fontWeight: 'bold',
 textDecoration: 'line-through'
}
const taskPending = {
  fontWeight: 'bold',
  color: 'tomato'
}

  return (

    <tr className='fw-normal' style={task.completed ? taskCompleted: taskPending}>
      <th>
        <span className='ms-2' >{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {taskLevelBudge()}
      </td>
      <td className='align-middle'>
        {taskIconCompleted()}
        <i onClick={() => deleted(task)} class="bi-trash task-action" style={{ color: 'tomato' }}></i>



      </td>

    </tr>

    /*     <div>
     <h2>Name:{ task.name }</h2>
     <h3>Description:{ task.description }</h3>
     <h4>Level:{ task.level }</h4>
     <h5>This task is:{ task.completed ? 'COMPLETED' : 'PENDING' }</h5>
        </div> */


  )
}

TaskComponent.propTypes = {   //class
  task: PropTypes.instanceOf(Task).isRequired,  // prop task === class Task  
  complete: PropTypes.func.isRequired,
  deleted: PropTypes.func.isRequired
}

export default TaskComponent



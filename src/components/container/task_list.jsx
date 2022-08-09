import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskForm from '../../pure/forms/taskForm';
import TaskComponent from '../../pure/task';
const Tasklist = () => {

    const defaultTask1 = new Task('example11', 'descriptionDefault', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('example22', 'descriptionDefault', false, LEVELS.URGENTE)
    const defaultTask3 = new Task('example33', 'descriptionDefault', true, LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log('Task state has been modified');

        setTimeout(() => {
            setLoading(false)          
        }, 2000);

        return () => {
            console.log('taskList component is goint to unmount');

        };
    }, [tasks]);
    //==============================================
    function completeTask(task) {
        console.log('complete this task', task);
        // buscar indice del mismo al q dimos click

        const index = tasks.indexOf(task)
        const temp = [...tasks]
        temp[index].completed = !temp[index].completed

        setTasks(temp)

    }
    //==============================================

    function deleteTask(task) {
        const index = tasks.indexOf(task)
        const temp = [...tasks]
        temp.splice(index, 1)

        setTasks(temp)
    }
    //========================================

    function addTask(task) {

        const temp = [...tasks]
        temp.push(task)
        setTasks(temp)
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => {
                            return (
                                <TaskComponent
                                    key={index}
                                    task={task}
                                    complete={completeTask}
                                    deleted={deleteTask}>
                                </TaskComponent>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }


    let tasksTable
    if (tasks.length > 0) {

        tasksTable = <Table></Table>
    } else {
        tasksTable = <div>
            <h2>There are no tasks to show</h2>
        </div>
    }

const loadingStyle ={
    color: 'gray',
    fontSize: '30px',
    fontWeight: 'bold'
}
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>  Your task:
                        </h5>

                    </div>
                </div>
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }} >
{/* TODO add loading spinner */}

                    { loading ? (<p style={loadingStyle} >Loading task...</p>) :  tasksTable}


                </div>
                <TaskForm add={addTask} length={tasks.length}>      </TaskForm>
            </div>



            <div>
            </div>
        </div>
    );



}

export default Tasklist

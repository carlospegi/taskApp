import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../../pure/task';
const Tasklist = () => {

    const defaultTask1 = new Task('example11', 'descriptionDefault', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('example22', 'descriptionDefault', false, LEVELS.URGENTE)
    const defaultTask3 = new Task('example33', 'descriptionDefault', true, LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(true)
        return () => {
            console.log('taskList component is goint to unmount');

        };
    }, [tasks]);

    /*    const changecompleted = (id) => {
           console.log('TODO:  cambiar estado de una tarea');
       } */

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
                                    task={task} >
                                    
                                    </TaskComponent>
                                    )
                                })
                            }
                        </tbody>
                    </table>


                </div>
            </div>



            <div>
            </div>
        </div>
    );



}

export default Tasklist

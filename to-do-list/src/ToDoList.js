import React from 'react';
import Task from './Task';
import './ToDoList.css';

class ToDoList extends React.Component{
    constructor(props){
        super();

        this.newIndex = 2;

        this.state = {
            tasks: [
                {
                    id: 0,
                    title: 'Learn JS',
                    isDone: false,
                },
                {
                    id: 1,
                    title: 'Learn React',
                    isDone: false,
                }
            ]
        }
    }

    createNewTask(e){
        if(e.key === 'Enter'){
            
            this.setState({
                tasks: [...this.state.tasks,
                    {title: e.currentTarget.value,
                    isDone: false,
                    id: this.newIndex}
                ]
            });
            e.currentTarget.value = ''; 
            this.newIndex++;
        }
    }
    
    deleteTask(taskId){
        const newIndex = this.state.tasks.filter((t)=>{
            return t.id !== taskId;
        });
        this.setState({
            tasks: newIndex
        });
    }

    // toggleTaskStatuse(task, e){
    //     task.isDone = !task.isDone;
    //     this.forceUpdate();
    // }

    render(){
        return (
            <div className='toDoList'>
                <h1>To Do List</h1>
                <div className='header'>
                    <input onKeyPress={this.createNewTask.bind(this)}/>
                </div>
                <div className='tasks'>
                    {
                        this.state.tasks.map((task)=>{
                            return <Task task={task} deleteCallBack={this.deleteTask.bind(this)} key={task.id} />
                        })
                    }
                </div>
            </div>
        )
    }

}

export default ToDoList;
import React from 'react';

class Task extends React.Component{
    constructor(props){
        super();
        this.state = {
            task: props.task
        };
        this.parentDeleteCallBack = props.deleteCallBack;
    }
    
    deleteTask(e){
        this.parentDeleteCallBack(this.state.task.id);
    }

    toggleTaskStatuse(e){
        let newTask = {
            ...this.state.task,
            isDone: !this.state.task.isDone
        };
        this.setState({
            task: newTask
        });
    }

    render(){
        return (
            <div className={this.state.task.isDone ? 'task done' : 'task'}>
                <input type='checkbox' onClick={this.toggleTaskStatuse.bind(this)}/>
                    {this.state.task.title}
                <span className='delete' onClick={this.deleteTask.bind(this)}>&#10060;</span>
            </div>
        )
    }

}

export default Task;
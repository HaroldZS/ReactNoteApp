import React from 'react';

import Navigation from './Navigation';
import TodoForm from './TodoForm';
import todos from '../Todos';

class Grilla extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todos
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    removeTodo(index){
        if(window.confirm('Are you sure to want to delete it?')){
            this.setState({
                todos: this.state.todos.filter((e,i) =>{
                    return i !== index;
                })
            })
        }
    }

    render() {
        const todos = this.state.todos.map((todo, i) =>{
            return (
                <div className='col-md-4' key={i}>
                    <div className='card mt-4'>
                        <div className='card-header'>
                            <h3>{todo.title}</h3>
                            <span className='badge badge-pill alert-danger ml-2'>
                                {todo.priority}
                            </span>
                        </div>
                        <div className='card-body'>
                            <p>{todo.description}</p>
                            <p><mark>{todo.responsible}</mark></p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-danger' onClick={this.removeTodo.bind(this,i)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
            <Navigation est={this.state.todos.length} />
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col-md-3'>
                        <TodoForm onAddTodo={this.handleAddTodo} />
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                        { todos }
                        </div>
                    </div>
                </div>
            </div>
            </div> 
        );
    }
}

export default Grilla;
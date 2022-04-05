import React from 'react';

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        alert('Sending the data...');
    }

    render() {
        return (
            <div className='card'>
                <form className='card-body' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Title" required />
                    </div>
                    <div className='form-group'>
                        <input type="text" name="responsible" onChange= {this.handleInput} className="form-control" placeholder="Responsible" required />
                    </div>
                    <div className='form-group'>
                        <input type="text" name="description" onChange= {this.handleInput} className="form-control" placeholder="Description" required />
                    </div>
                    <div className='form-group'>
                        <select name='priority' onChange={this.handleInput} className='form-control'>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <button type='submit'className='btn btn-primary'>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;

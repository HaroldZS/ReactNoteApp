import React from 'react';
import '../App'

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    Tasks_
                    <span className='badge badge-pill alert-light'>
                        {this.props.est}
                    </span>
                </a>
            </nav>
        );
    }
}

export default Navigation;
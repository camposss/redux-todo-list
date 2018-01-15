import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';
import {deleteItem, getItems, toggleComplete} from '../actions';

class ListItem extends Component{
    constructor(props){
        super(props);

        this.state={
            toggleCompleted: false

        }
    }

    toggleComplete(id){
        const {toggleCompleted}= this.state;
        this.props.toggleComplete(id).then(()=>this.props.getItems());

    }
    handleDelete(id){
        this.props.deleteItem(id).then(()=>this.props.getItems());
    }

    render(){
        return (
            <li className='list-group-item'>
                <Link to={`/item/${this.props._id}`}>{this.props.title}</Link>
                    <div className="form-check has-success ">
                        <label className="form-check-label">
                            <input onClick={()=>this.toggleComplete(this.props._id)}
                                   type="radio"
                                   className="form-check-input" checked={this.props.complete? 'checked': ''}/>
                                {this.props.complete? "Done": "Mark Complete" }
                        </label>
                    </div>
                    <button type="button" className='close' onClick={()=>this.handleDelete(this.props._id)}  >
                        <span aria-hidden="true">&times;</span>
                    </button>
            </li>
        )
    }
}

export default connect(null, {deleteItem, getItems, toggleComplete})(ListItem)
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';
import {deleteItem, getItems} from '../actions';

class ListItem extends Component{

    handleDelete(id){
        console.log('clicked on the delete button. handling delete function', id);
        console.log('these are the props after clicking delete button', this.props);
        this.props.deleteItem(id).then(()=>this.props.getItems());
    }

    render(){
        return (
            <li className='list-group-item'>
                <Link to={`/item/${this.props._id}`}>{this.props.title}</Link>
                <button type="button" className='close' onClick={()=>this.handleDelete(this.props._id)}  >
                    <span aria-hidden="true">&times;</span>
                </button>
            </li>
        )
    }
}

export default connect(null, {deleteItem, getItems})(ListItem)
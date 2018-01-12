import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getItems } from "../actions/";

class List extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    render(){
        console.log('list props', this.props);
        const listItems= this.props.list.map((item,index)=>{
           return <li className='list-group-item' key={index}>{item.title}</li>
        });

        return(
            <div>
                <div className='row my-4 justify-content-end'>
                    <div className='col-2 '>
                        <Link to='/add-item' className='btn btn-outline-primary'> Add To Do</Link>
                    </div>
                </div>
                <h1>To Do List</h1>
                <ul className='list-group'>
                    {listItems}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        list: state.todo.list

    }
}
export default connect(mapStateToProps, {getItems})(List);
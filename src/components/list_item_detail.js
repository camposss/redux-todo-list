import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingleItem} from "../actions/";

class ListItemDetail extends Component {

    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.id);
    }
    render(){
        console.log('list item detail props ', this.props);

        if(!this.props.todo) {
            return <h1>Loading for Sangwoo!</h1>
        }
        return(
            <div>
                <div className='row my-4 justify-content-end'>
                    <Link className='btn btn-outline-primary' to='/'> Home</Link>
                </div>
                <h1 className='text-center'> To Do: {this.props.todo.title}</h1>
                <h3>{this.props.todo.details}</h3>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        todo: state.todo.single
    }
}
export default connect(mapStateToProps, {getSingleItem})(ListItemDetail);
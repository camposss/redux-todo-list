import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingleItem} from "../actions/";

class ListItemDetail extends Component {
    constructor(props){
        super(props);

        this.state={
            canEdit: false
        }
    }

    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.id);
    }
    handleEdit(){
        console.log('handling edit');
        this.setState({
            canEdit: true
        })
    }
    render(){
        console.log('list item detail props ', this.props);

        if(!this.props.todo) {
            return <h1>Loading for Sangwoo!</h1>
        }
        console.log(this.state.canEdit);

        return(
            <div>
                <div className='row my-4 justify-content-end'>
                    <Link className='btn btn-outline-primary' to='/'> Home</Link>
                    <button className='btn btn-outline-warning' onClick={()=>this.handleEdit()}>Edit</button>
                </div>
                <h1 className='text-center' contentEditable='true'> To Do: {this.props.todo.title}</h1>
                <h3 contentEditable='true'>{this.props.todo.details}</h3>
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
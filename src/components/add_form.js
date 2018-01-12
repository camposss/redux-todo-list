import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {connect } from 'react-redux';
import {addItem} from '../actions';

class AddForm extends Component{
    handleAddItem(values){
        console.log('form submitted with', values);
        this.props.addItem(values).then(()=>{
            this.props.history.push('/');
        });
    }
    renderInput({label, input, meta: {touched, error}}){

        return(
            <div className='form-group'>
                <label>{label}</label>
                <input {...input} className='form-control' type="text"/>
                <p className='text-danger'>{touched && error}</p>
            </div>
        )
    }
    render(){

        return(
            <div>
                <div className='row my-4 justify-content-end'>
                    <Link className='btn btn-outline-primary' to='/'> Home</Link>
                </div>
                <h1>你打算做什么？？</h1>
                <form onSubmit={this.props.handleSubmit(this.handleAddItem.bind(this))}>
                    <Field className='form-control' label='Title' name='title' component={this.renderInput}/>
                    <Field className='form-control' label='Details' name='details' component={this.renderInput}/>
                    <button className='btn btn-outline-success'>Add To Do Item</button>
                    <button onClick={this.props.reset} type='button' className='btn btn-outline-danger ml-3'>Reset Form</button>
                </form>
            </div>
        )
    }
}
function validate (values){
    const errors= {};

    if(!values.title){
        errors.title= 'Please enter a Title';
    }
    if(!values.details){
        errors.details= 'Please enter some Details';
    }
    return errors;
}

AddForm= reduxForm({
    form: 'add-item',
    validate: validate
})(AddForm);

export default  connect(null, {addItem})(AddForm);


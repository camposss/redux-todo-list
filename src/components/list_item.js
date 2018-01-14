import React from 'react';
import {Link} from 'react-router-dom';

export default props =>{
    console.log('list item props', props);
    return (
        <li className='list-group-item'>
            <Link to={`/item/${props._id}`}>{props.title}</Link>
            <button type="button" className='close' onClick={()=>console.log('clicked the span button and its index', props.key)}>
                <span aria-hidden="true">&times;</span>
            </button>
        </li>
    )
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import AddForm from './add_form';
import List from './list';
import ListItemDetail from './list_item_detail';


const App = () => (
    <div className='container'>
        <Route exact path ='/' component={List}/>
        <Route path ='/add-item' component = {AddForm}/>
        <Route path='/item/:id' component={ListItemDetail}/>
    </div>
);

export default App;

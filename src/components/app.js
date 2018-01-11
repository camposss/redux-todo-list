import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddForm from './add_form';
import List from './list';

const App = () => (
    <div className='container'>
        <List/>
        <AddForm />
    </div>
);

export default App;

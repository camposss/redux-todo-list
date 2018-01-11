import React, {Component} from 'react';

class AddForm extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <h2>항목 추가</h2>
                <form>
                    <input type="text" placeholder='Add Todo'/>
                </form>
            </div>
        )
    }
}
export default AddForm;
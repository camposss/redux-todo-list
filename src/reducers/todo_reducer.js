import types from '../actions/types';
const DEFAULT_STATE= {
    list: [
        {
            title: 'Learn Chinese',
            details: 'Learn that Isshhh'
        },
        {
            title: 'Learn Korean with Sangwoo',
            details: 'Maybe with Jay too'
        },
        {
            title: 'Learn Czech with Simon',
            details: 'Language too hard'
        }
    ]
}

export default function (state=DEFAULT_STATE, action){
    switch(action.type){
        case types.ADD_ITEM:
            console.log('REDUCER:', action);
            return{ list: [action.payload, ...state.list]};
        default:
            return state;
    }
}
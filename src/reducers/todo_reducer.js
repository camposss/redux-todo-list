import types from '../actions/types';
const DEFAULT_STATE= {
    list: [],
    single: null
};

export default function (state=DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_ITEMS:
            console.log('get items', action);
            return {...state, list: action.payload.data.todos};
        case types.ADD_ITEM:
            console.log('add item :', action);
            return state;
        case types.GET_SINGLE_ITEM:
            console.log('single item :', action);
            return {...state, single: action.payload.data.todo};
        default:
            return state;
    }
}
import types from '../actions/types';
const DEFAULT_STATE= {
    list: [],
    single: null
};

export default function (state=DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_ITEMS:
            return {...state, list: action.payload.data.todos};
        case types.ADD_ITEM:
            return state;
        case types.GET_SINGLE_ITEM:
            return {...state, single: action.payload.data.todo};
        case types.DELETE_ITEM:
            return state;
        case types.TOGGLE_ITEM:
            return state;
        default:
            return state;
    }
}
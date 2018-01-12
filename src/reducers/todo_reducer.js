import types from '../actions/types';
const DEFAULT_STATE= {
    list: []
};

export default function (state=DEFAULT_STATE, action){
    switch(action.type){
        case types.ADD_ITEM:
            console.log('REDUCER:', action);
            return{ list: [action.payload, ...state.list]};
        case types.GET_ITEMS:
            console.log('get items', action);
        default:
            return state;
    }
}
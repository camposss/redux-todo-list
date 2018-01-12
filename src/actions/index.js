import types from './types';
import axios from 'axios';

const BASE_URL= 'http://api.reactprototypes.com';
const API_KEY= '?key=christian1234';

export function addItem (item){
    return{
        type: types.ADD_ITEM,
        payload: item
    }
}

export function getItems(){
    const request = axios.get(BASE_URL+'/todos'+API_KEY);
    return{
        type: types.GET_ITEMS,
        payload: request
    }
}
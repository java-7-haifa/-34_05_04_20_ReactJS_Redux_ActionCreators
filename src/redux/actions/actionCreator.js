import * as types from './actionTypes';

export function incCount(){
    return {
        type:types.INC
    }
}

export function decCount(){
    return {
        type:types.DEC
    }
}

export function addNumber(num){
    return {
        type:types.ADD_NUM,
        num
    }
}

export function subNumber(num){
    return {
        type:types.SUB_NUM,
        num
    }
}
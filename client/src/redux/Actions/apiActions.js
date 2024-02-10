import { FETCH_FAILURE,FETCH_REQUEST,FETCH_SUCCESS } from "./actionTypes";

export const fetchRequest =()=>{
    return {
        type:FETCH_REQUEST
    }
}

export const fetchSuccess =(data)=>{
    return {
        type:FETCH_SUCCESS,
        payload:data
    }
}

export const fetchFailure =(error)=>{
    return{
        type: FETCH_FAILURE,
        payload: error,
    }
}

export const fetchCourses =()=>{
    return (dispatch)=>{
        dispatch(fetchRequest())
        fetch('http://localhost:8001/')
        .then(res=> res.json())
        .then(data=> {
            dispatch(fetchSuccess(data))
            console.log(data);            
        })
        .catch(error=> {
            dispatch(fetchFailure(error));
            console.log(error)
        })
    }
}
import {ADD_TASK, DONE_TASK, DELETE_TASK} from "./action_constants";

export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
};

export const doneTask = (index) => {
    return {
        type: DONE_TASK,
        payload: index
    }
};

export const deleteTask = (index) => {
    return {
        type: DELETE_TASK,
        payload: index
    }
};
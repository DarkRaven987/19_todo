import {ADD_TASK, DONE_TASK, DELETE_TASK} from "./action_constants";

const InitialState = {
    tasks: [
        {id: 1,name: "Wake up!", done: false},
        {id: 2,name: "Have a breakfast!", done: false},
        {id: 3,name: "Go to academy!", done: false},
    ]
};

export const reducer = (state=InitialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state, tasks: [...state.tasks, {name: action.payload, done: false}]
            };
        case DONE_TASK:
            state.tasks = state.tasks.map((el) =>{
                if(el.id===action.payload){el.done = true;}
                return el;
            });
            return {
                ...state
            };
        case DELETE_TASK: {
            state.tasks = state.tasks.filter((el) => el.id !== action.payload);
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};
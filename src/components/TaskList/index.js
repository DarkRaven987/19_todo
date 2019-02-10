import React from 'react';
import {connect} from 'react-redux';
import {doneTask, deleteTask} from "../../store/actions";

const TaskList = (props) =>{
    const {tasks, doneTask, deleteTask}= props;

    return(
        <div>
            {tasks.map((el,i)=>{
                return(
                    <li key={i}>
                        {el.name}
                        {el.done? '':<button onClick={()=>doneTask(el.id)}>Done</button>}
                        <button onClick={()=>deleteTask(el.id)}>Delete</button>
                    </li>
                );
            })}
        </div>
    );
};

const putStateToProps = state => {
    return {
        ...state
    }
};

const putActionsToProps = dispatch => {
    return {
        doneTask: task => dispatch(doneTask(task)),
        deleteTask: task => dispatch(deleteTask(task))
    }
};



export default connect(putStateToProps, putActionsToProps)(TaskList);
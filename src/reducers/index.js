//make pure fxns for predictability
import { ADD_MOVIES } from "../actions";
export default function movies(currentState=[],action){//we will be getting current state and action(where movies array is passed)
    if(action.type===ADD_MOVIES){
        return action.movies;//returning movies array from action placed in actions 
    }
    //a reducer has to return something either the original state or new state
    return currentState;
}

  
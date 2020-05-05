import * as actions from '../actions';

const state = {
    data:[]
};

const reducer = (initState = state, actions) => {
    switch(actions.type){
        case 'LOADED_DONE':
            return initState.name;
        case 'DATA_LOADED':
            return {
                ...state,
               data: actions.payload
            };    
    };
}; 

export default reducer;
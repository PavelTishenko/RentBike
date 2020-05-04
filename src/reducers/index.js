import * as actions from '../actions';

const state = {
    name: 'Pavlo'
};

const reducer = (initState = state, actions) => {
    switch(actions.type){
        case 'LOADED_DONE':
            return initState.name;
    };
}; 

export default reducer;
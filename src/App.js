import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { hocWithService } from './hoc';


const App = (props) => { 
    const { LOADED, name, bikeService } = props;

    useEffect(() => {
        const data = bikeService.getData;
        console.log(data);
    });

    return (
        <div>
            <span>{name}</span>
            <button onClick={ LOADED }>Show</button>
        </div>
    );
 };

 
const mapStateToProps = (state) => {
    return{
        name: state
    };
};

const mapDispatchToProps = (dispatch) => {
    const { LOADED } = bindActionCreators(actions, dispatch);
    return {
        LOADED
    };
};

 export default hocWithService()(connect(mapStateToProps, mapDispatchToProps)(App));
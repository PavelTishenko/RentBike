import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { hocWithService } from './hoc';
import Spinner from './components/Spinner';

import './app.css'
const App = (props) => {
    const { bikeService, DATA_LOADED, state } = props;
    useEffect(() => {
        bikeService.getData()
            .then((data) => DATA_LOADED(data))
    }, []);

    if (state) {
        const { data } = state;
        const bikes = data.map((bike) => {
            return <span key={bike.id}>{bike.title}</span>
        })
        return (
            <div className="main-container">
            <span>{bikes}</span>
            </div>)
    } else {
        return (
        <div className="spinner">
            <Spinner/>
        </div>
        )
    };
};



const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    const { LOADED, DATA_LOADED } = bindActionCreators(actions, dispatch);
    return {
        LOADED,
        DATA_LOADED
    };
};

export default hocWithService()(connect(mapStateToProps, mapDispatchToProps)(App));
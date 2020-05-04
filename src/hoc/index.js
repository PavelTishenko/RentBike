import React from 'react';
import { Context } from '../context';

const hocWithService = () => (Wrapped) => {
    return (props) => {
        return (
            <Context.Consumer>
                {
                 (bikeService) => {
                        return (<Wrapped {...props} 
                                bikeService={bikeService}/>)
                    }
                }
            </Context.Consumer>
        );
    };
};

export { hocWithService };
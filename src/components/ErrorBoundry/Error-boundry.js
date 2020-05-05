import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    };
    componentDidCatch() {
        this.setState({ hasError: true })
    };
    render() {
        if (this.state.hasError) {
            return <span>We have some problem....</span>
        } else {
            return this.props.children
        };
    };
};
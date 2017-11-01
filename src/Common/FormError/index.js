import React, { Component, PropTypes } from 'react';

class FormError extends Component {

    render () {
        const { error } = this.props;
        return (
            <p>{error}</p>
        )
    }
}

export default FormError;
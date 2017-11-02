import React, { Component, PropTypes } from 'react';
import style from './style.scss';

class PublishedNotification extends Component {
    constructor() {
        super();

        this.publishedStatus = 'Published...';
    }
    render () {
        return (
            <div className={'notification__admin'}>
                <p className={'notification__admin-text'}>{this.publishedStatus}</p>
            </div>
        )
    }
}

export default PublishedNotification;
import React, { Component, PropTypes } from 'react';
import style from './style.scss';

class Donate extends Component {
    render () {
        console.log(this);
        const { paidInfo } = this.props;
        return (
            <div className={'donate'}>
                <div className={'donate__card'}>
                    <p>
                        {paidInfo}
                    </p>
                </div>
                <div className="donate__link">
                    <a href={'https://www.privat24.ua/'}>Приват 24</a>
                </div>
            </div>
        )
    }
}

export default Donate;
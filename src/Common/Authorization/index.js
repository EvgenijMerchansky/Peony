import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeError, disableError } from '../../Actions';
import * as data from '../../constants';
import { Link } from 'react-router-dom';
import style from './style.scss';

class Dashboard extends Component {
    constructor() {
        super();

        this._adminLogin = data.ADMIN_LOGIN;
        this._adminPassword = data.ADMIN_PASSWORD;
        this.log = '';
        this.pass = '';
        this.alias = '/admin'; // default
    }

    validator = (e, ident) => {
        if (ident === '1') {
            this.log = e.target.value;
        } else {
            this.pass = e.target.value;
        }

        if (this.log === this._adminLogin && this.pass === this._adminPassword) {
            let rand = Math.random();
            this.alias = `/authorized/:id${rand}`;
        }
        this.forceUpdate();
    };

    errorMaker = () => {
        if (this.alias === '/authorized') return;

        this.props.makeError();
        setTimeout(() => {
            this.props.disableError();
        }, 1500)
    };

    render () {
        let { error } = this.props.adminState;
        return (
            <div className={'dashboard'}>
                <div className="dashboard__window">
                    <h3>Admin panel authorization</h3>
                    <label
                        htmlFor={'login'}
                        className={'dashboard__window-login-label'}
                    >
                        Type login:
                    </label>
                    <input
                        onChange={(e) => {::this.validator(e, '1')}}
                        type={'text'}
                        id={'login'}
                        className={'dashboard__window-login'}
                    />
                    <label
                        htmlFor={'password'}
                        className={'dashboard__window-password-label'}
                    >
                        Type password:
                    </label>
                    <input
                        onChange={(e) => {::this.validator(e, '2')}}
                        type={'password'}
                        id={'password'}
                        className={'dashboard__window-password'}
                    />
                    <Link
                        onClick={::this.errorMaker}
                        className={'dashboard__window-accept-button'}
                        to={`${this.alias}`}
                    >
                        Accept
                    </Link>
                    <p className={'dashboard__window-error'}>
                        {error.error && error.error}
                    </p>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        adminState: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        makeError,
        disableError,

    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
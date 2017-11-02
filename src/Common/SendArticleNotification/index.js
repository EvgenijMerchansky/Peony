import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { hideModal, newArticles, openNotificate } from '../../Actions';
import style from './style.scss';

class Notification extends Component {

    render() {
        console.log(this);
        let { notificationState } = this.props;
        return (
            <div className={'notification'}>
                <p className={'notification__text'}>{notificationState && notificationState}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notificationState: state.notification.notificationInfo,
    }
};

export default connect(mapStateToProps)(Notification);
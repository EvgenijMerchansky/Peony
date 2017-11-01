import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideModal, newArticles, openNotificate, resetNotification, makeError, disableError } from '../../Actions';
import style from './style.scss';

import FormError from '../FormError';

class Modal extends Component{

    constructor() {
        super();
        this.error = {
            error: true,
            validIndicate: 0,
        }
    }

    formData = (e) => {
        e.preventDefault();
        const { title, description, article, name, email } = this.refs,

        newArticle = {
            title: title.value,
            description: description.value,
            article: article.value,
            name: name.value,
            email: email.value,
        };

        for (let error in newArticle) {
            if (newArticle[error] === '') {
                this.error = {
                    error: true,
                    validIndicate: 1
                };
            } else {
                this.error = {
                    validIndicate: 0,
                    error: false,
                };
            }
        }

        if (!this.error.error && this.error.validIndicate === 0) {

            this.props.newArticles(newArticle);

            this.props.disableError();

            this.props.hideModal();

            this.props.openNotificate();

            setTimeout(() => {
                this.props.resetNotification();
            }, 1000);

            for (let item in this.refs) {
                this.refs[item].value = '';
            }
        } else {

            this.props.makeError();

        }
    };

    render () {
        console.log(this);
        const { modalState } = this.props;
        return(
            <div className={'fields'}>
                <div>
                    <h1 className={'fields__title'}>
                        {this.error.error === false ? 'Done!' : 'Make your article!'}
                    </h1>
                    <form onSubmit={::this.formData}>
                        <label
                            htmlFor={'fields__title-field'}
                            className={'fields__desc'}
                        >
                            Add title:
                        </label>
                        <input
                            ref={'title'}
                            type={'text'}
                            className={'fields__title-field'}
                            id={'fields__title-field'}
                        />
                        <label
                            htmlFor={'fields__description-field'}
                            className={'fields__desc'}
                        >
                            Add description:
                        </label>
                        <input
                            ref={'description'}
                            type={'text'}
                            className={'fields__description-field'}
                            id={'fields__description-field'}
                        />
                        <label
                            htmlFor={'fields__article-field'}
                            className={'fields__desc'}
                        >
                            Create article:
                        </label>
                        <textarea
                            ref={'article'}
                            className={'fields__article-field'}
                            id={'fields__article-field'}
                        >

                        </textarea>
                        <label
                            htmlFor={'felds__name-field'}
                            className={'fields__desc'}
                        >
                            Type your name:
                        </label>
                        <input
                            ref={'name'}
                            type={'text'}
                            className={'fields__name-field'}
                            id={'felds__name-field'}
                        />
                        <label
                            htmlFor={'felds__email-field'}
                            className={'fields__desc'}
                        >
                            Type your email:
                        </label>
                        <input
                            ref={'email'}
                            type={'email'}
                            className={'fields__email-field'}
                            id={'felds__email-field'}
                        />
                        <label
                            htmlFor={'post-article'}
                            className={'fields__desc'}
                        >
                            Public article!
                        </label>
                        <button
                            className={'fields__post-article'}
                            type={'submit'}
                        >
                            POST
                        </button>
                        {modalState.error.error && <FormError error={modalState.error.error}/>}
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
     return {
          modalState: state
     }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        hideModal,
        newArticles,
        openNotificate,
        resetNotification,
        makeError,
        disableError,

    }, dispatch);
};

export default connect (mapStateToProps, mapDispatchToProps)(Modal);

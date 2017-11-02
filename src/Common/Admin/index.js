import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import style from './style.scss';
import { dbArticles, checkerId, published, deleteItem } from '../../Actions'; // !-!-! published
import { connect } from 'react-redux';
import PublishedNotification from '../PublishedAdminNotification';

class Admin extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
            publishedStatus: 'red'
            // published: [], !-!-!
        }
    }

    componentDidMount () {
        dbArticles().then(resp => {
            this.setState({
                articles: resp.data
            })
        });
        // published().then(resp => { !-!-!
        //     this.setState({
        //         published: resp.data
        //     })
        // });
    };

    resetPageData = () => {
        this.props.location.pathname.substr(0, 15);
    };

    checker = (id, e) => {
        checkerId(id);

        e.target.parentNode.style.borderColor = 'green';
        e.target.style.display = 'none';

        // ADD POSITION - FIXED NOTIFICATION
    };

    deleteCard = (id) => {
        deleteItem(id);
    };

    render () {
        console.log(this);
        return (
            <div className={'admin'}>
                <h3 className={'admin__title'}>Admin Dashboard</h3>
                {
                    this.state.articles.map(elem => {
                        return (
                            <div key={elem.id} className={'admin-articles-card'} style={{ border: 'solid', borderWidth: 2, borderColor: elem.accepted ? 'green' : this.state.publishedStatus }}>
                                <h4>{elem.name}</h4>
                                <p>{elem.id}</p>
                                <h5>{elem.email}</h5>
                                <h6>{elem.title}</h6>
                                <p>{elem.article}</p>
                                <button
                                    style={{ display: elem.accepted && 'none' }}
                                    onClick={(e) => {::this.checker(elem.id, e)}}
                                >
                                    Public
                                </button>

                                {elem.accepted && <PublishedNotification/>}
                            </div>
                        )
                    })
                }
                <button
                    onClick={() => {::this.deleteCard(33)}}
                >
                    Delete
                </button>
                <Link
                    to={'/'}
                    onClick={(e) => { ::this.resetPageData(e) }}
                >
                    Exit
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adminPanelState: state,
    }
};

export default connect(mapStateToProps)(Admin);
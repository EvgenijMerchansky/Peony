import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import style from './style.scss';
import { dbArticles } from '../../Actions';
import { connect } from 'react-redux';

class Admin extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],

        }
    }

    componentDidMount () {
        dbArticles().then(resp => {
            this.setState({
                articles: resp.data
            })
        });
    };

    render () {
        console.log(this);
        return (
            <div className={'admin'}>
                <h3 className={'admin__title'}>Admin Dashboard</h3>
                {
                    this.state.articles.map(elem => {
                        return (
                            <div key={elem.id} className={'admin-articles-card'}>
                                <h4>{elem.name}</h4>
                                <p>{elem.id}</p>
                                <h5>{elem.email}</h5>
                                <h6>{elem.title}</h6>
                                <p>{elem.article}</p>
                                <input type={'checkbox'} checked={elem.accepted}/>
                                <button>Public</button>
                            </div>
                        )
                    })
                }
                <Link to={'/'}>
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
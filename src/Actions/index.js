import axios from 'axios';

export const hideModal = () => {
    return (dispatch) => {
        dispatch({
            type: 'HIDE_MODAL',
            payload: ''
        })
    }
};

export const showModal = () => {
    return (dispatch) => {
        dispatch({
            type: 'SHOW_MODAL',
            payload: ''
        })
    }
};

export const newArticles = (newArticle) => {

    newArticle.id = Date.now().toFixed(0);
    newArticle.accepted = false;

    axios({
        method: 'post',
        url: 'http://localhost:3000/articles',
        data: {
            newArticle: newArticle,
        }
    });

    return (dispatch) => {
        dispatch({
            type: 'NEW_ARTICLES',
            payload: newArticle
        });
    }
};

export const openNotificate = () => {
    return (dispatch) => {
        dispatch({
            type: 'ENABLE_NOTIFICATION',
            payload: 'Well done! You article is added to admin review!'
        });
    }
};

export const resetNotification = () => {
    return (dispatch) => {
        dispatch({
            type: 'RESET_NOTIFICATION',
            payload: ''
        })
    }
};

export const makeError = () => {
    return (dispatch) => {
        dispatch({
            type: 'ERROR',
            payload: 'Invalid data!'
        });
    }
};

export const disableError = () => {
    return (dispatch) => {
        dispatch({
            type: 'DISABLE_ERROR',
            payload: ''
        });
    }
};

export const dbArticles = () => {
    return axios.get('http://localhost:3000/authorized');
};
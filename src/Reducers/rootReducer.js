import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import formDataReducer from './formDataReducer';
import notificationReducer from './notificationReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    modal: modalReducer,
    formData: formDataReducer,
    notification: notificationReducer,
    error: errorReducer,
});

export default rootReducer;
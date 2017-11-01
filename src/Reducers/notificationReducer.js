const initialState = {
    notificationInfo: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ENABLE_NOTIFICATION':
            return Object.assign({}, state, {notificationInfo: action.payload});
        case 'RESET_NOTIFICATION':
            return Object.assign({}, state, {notificationInfo: action.payload});
        default:
            return state;
    }
}
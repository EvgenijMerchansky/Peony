const initialState = {
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR':
            return Object.assign({}, state, {error: action.payload});
        case 'DISABLE_ERROR':
            return Object.assign({}, state, {error: action.payload});
        default:
            return state;
    }
}
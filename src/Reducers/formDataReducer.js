const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_ARTICLES':
            return [...state, action.payload];
            break;
        default:
            return state;
            break
    }
};
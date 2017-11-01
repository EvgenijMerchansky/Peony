const initialState = {
    modal: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'HIDE_MODAL':
            return Object.assign({}, state, {modal: false});
            break;
        case 'SHOW_MODAL':
            return Object.assign({}, state, {modal: true});
            break;
        default:
            return state;
    }
}
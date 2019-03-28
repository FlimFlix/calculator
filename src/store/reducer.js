const initialState = {
    value: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TEXT':
            console.log('ADD_TEXT');
            return {...state, value: state.value === 0 ? action.text : state.value + action.text};
        case 'CLEAR':
            return {...state, value: 0};
        case 'EQUAL':
            return {...state, value: eval(state.value)};
        default:
            return state;
    }
};

export default reducer;
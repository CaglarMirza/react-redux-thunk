import {
    SET_LOADING_TRUE,
    SET_LOADING_FALSE,
    // SET_TOKEN,
    // SET_ERROR,
    // SET_LANGUAGE
} from '../types/appTypes';

const initialState = {
    loading: false,
    token: '',
    error: [],
    language: 'en',
}

export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING_TRUE:
            return {
                ...state,
                loading: true,
            };
        case SET_LOADING_FALSE:
            return {
                ...state,
                loading: false,
            };
        // case SET_TOKEN:
        //     return {
        //         ...state,
        //         token: payload,
        //     };
        // case SET_ERROR:
        //     return {
        //         ...state,
        //         error: payload,
        //     };
        // case SET_LANGUAGE:
        //     return {
        //         ...state,
        //         language: payload,
        //     };
        default:
            return state;
    }
}

export default appReducer;
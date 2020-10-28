import {
    CHANGE_VALUE,
    POST_ORIGINAL_LINK_ERROR,
    POST_ORIGINAL_LINK_SUCCESS
} from "./actionTypes";

const initialState = {
    link: null,
    originalUrl: '',
    error: null
};

export const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_ORIGINAL_LINK_SUCCESS:
            return {
                ...state,
                link: action.data,
                error: null,
                originalUrl: ''
            };
        case POST_ORIGINAL_LINK_ERROR:
            return {
                ...state,
                error: action.error
            };
        case CHANGE_VALUE:
            return {
                ...state,
                originalUrl: action.value
            };
        default:
            return state;
    }
};
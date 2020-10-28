import {
    CHANGE_VALUE,
    POST_ORIGINAL_LINK_ERROR,
    POST_ORIGINAL_LINK_REQUEST,
    POST_ORIGINAL_LINK_SUCCESS
} from "./actionTypes";

const initialState = {
    link: null,
    originalUrl: '',
    loading: false,
    error: null
};

export const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_ORIGINAL_LINK_REQUEST:
            return {
                ...state,
                loading: true
            };
        case POST_ORIGINAL_LINK_SUCCESS:
            return {
                ...state,
                link: action.data,
                loading: false,
                error: null,
                originalUrl: ''
            };
        case POST_ORIGINAL_LINK_ERROR:
            return {
                ...state,
                loading: false,
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
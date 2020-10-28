import {
    CHANGE_VALUE,
    POST_ORIGINAL_LINK_ERROR,
    POST_ORIGINAL_LINK_REQUEST,
    POST_ORIGINAL_LINK_SUCCESS
} from "./actionTypes";
import {axiosApi} from "../axiosApi";

export const changeValue = e => ({type: CHANGE_VALUE, value: e.target.value});
const postOriginalLinkRequest = () => ({type: POST_ORIGINAL_LINK_REQUEST});
const postOriginalLinkSuccess = data => ({type: POST_ORIGINAL_LINK_SUCCESS, data});
const postOriginalLinkError = error => ({type: POST_ORIGINAL_LINK_ERROR, error});

export const postOriginalLink = (e, data) => {
    e.preventDefault();
    return async dispatch => {
        dispatch(postOriginalLinkRequest());
        try {
            const response = await axiosApi.post(`/links`, data);
            dispatch(postOriginalLinkSuccess(response.data));
        } catch (e) {
            dispatch(postOriginalLinkError(e));
        }
    }
}
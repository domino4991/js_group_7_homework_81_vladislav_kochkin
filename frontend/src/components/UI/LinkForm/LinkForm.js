import React from 'react';
import './LinkForm.css';
import {useDispatch, useSelector} from "react-redux";
import {changeValue, postOriginalLink} from "../../../store/linkActions";

const LinkForm = () => {
    const {originalUrl, error} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <form className="Link-form" onSubmit={e => dispatch(postOriginalLink(e, {originalUrl}))}>
            <input
                type="text"
                name="originalUrl"
                value={originalUrl}
                onChange={e => dispatch(changeValue(e))}
                placeholder="Enter your link..."
                className="Form__field"
                required
            />
            {error && <p>{error}</p>}
            <button type="submit" className="Link-form__btn">Shorten!</button>
        </form>
    );
};

export default LinkForm;
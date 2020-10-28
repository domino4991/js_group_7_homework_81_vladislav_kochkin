import React from 'react';
import './Main.css';
import {useSelector} from "react-redux";
import LinkForm from "../../components/UI/LinkForm/LinkForm";
import {urlApi} from "../../constants";

const Main = () => {
    const {link} = useSelector(state => state);

    return (
        <section className="Main">
            <div className="container">
                <h1 className="Main__title">Shorten your link!</h1>
                <LinkForm />
                {link &&
                <p className="Main__txt">Your link:
                    <a
                        href={urlApi + link.shortUrl}
                        target="_blank" rel="noreferrer"
                        className="Main__link"
                    >
                        {urlApi + link.shortUrl}
                    </a>
                </p>}
            </div>
        </section>
    );
};

export default Main;
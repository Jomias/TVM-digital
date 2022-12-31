import React from 'react'
import Banner from '../../components/UI/Banner';
import GetIdea from './GetIdea';
import Subscribe from './Subscribe';
import usePath from '../../hooks/usePath';

const Contact = () => {

    usePath(window.location.pathname);

    return (
        <main>
            {/*BANNER */}
            <Banner Page={'contact'} />
            {/*/.END BANNER*/}

            {/*SUBMIT IDEA */}
            <GetIdea />
            {/*/.END SUBMIT IDEA*/}

            {/* SUBSCRIBE */}
            <Subscribe />
            {/*END SUBSCRIBE*/}
        </main>
    )
}

export default Contact;
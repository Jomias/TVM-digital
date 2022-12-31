import React from 'react'
import Benefits from './Benefits';
import Definition from './Definition';
import Projects from './Projects';
import Reasons from './Reasons';
import Banner from '../../components/UI/Banner'
import usePath from '../../hooks/usePath';

const WhyChooseUs = () => {

    usePath(window.location.pathname);
    return (
        <main>
            {/*BANNER */}
            <Banner Page={'whychooseus'} />
            {/*/.END BANNER*/}

            {/*Definition */}
            <Definition />
            {/*/.END Definition*/}

            {/* Reasons */}
            <Reasons />
            {/* End Reasons */}

            {/* Benefits */}
            <Benefits />
            {/* End Benefits */}

            {/* Projects */}
            <Projects />
            {/* End Projects */}
        </main>
    )
}

export default WhyChooseUs;
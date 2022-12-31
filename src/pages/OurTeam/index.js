import React from 'react'
import SlideShow from '../../components/UI/SlideShow';
import usePath from '../../hooks/usePath';
import Leaders from './Leaders';
import OurPartners from './OurPartners';
import TopReasons from './TopReasons';

const OurTeam = () => {
    usePath(window.location.pathname);
    return (
        <main>
            {/* Top Reasons */}
            <TopReasons />
            {/* End Top Reasons */}

            {/* Slide Show */}
            <SlideShow />
            {/* End Slide Show */}

            {/* Leader Team */}
            <Leaders />
            {/* End Leader Team */}

            {/* Partners */}
            <OurPartners />
            {/* End Partners */}

        </main>
    )
}

export default OurTeam;
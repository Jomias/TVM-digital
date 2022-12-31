import React from 'react'
import Introduce from '../../components/UI/Introduce';
import usePath from '../../hooks/usePath';
import IndustriesList from './IndustriesList';

const Industries = () => {
    usePath(window.location.pathname);
    return (
        <main>
            <Introduce Page={'industries'} />
            <IndustriesList />
        </main>
    )
}

export default Industries;
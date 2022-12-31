import React from 'react'
import WorksForm from '../../components/form/WorksForm';
import Introduce from '../../components/UI/Introduce'
import usePath from '../../hooks/usePath';
import Proprietarys from './Proprietarys';
import Recents from './Recents';

const Works = () => {

    usePath(window.location.pathname);

    return (
        <main>
            {/* Introduce */}
            <Introduce Page={'works'} />
            {/* End Introduce */}

            {/* Recent Projects */}
            <Recents />
            {/* End Recent Projects */}

            {/* Proprietary Projects */}
            <Proprietarys />
            {/* End Proprietary Projects */}

            {/* Works Form */}
            <WorksForm />
            {/* End Works Form */}
        </main>
    )
}

export default Works;
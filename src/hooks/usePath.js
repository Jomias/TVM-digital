import { useContext, useEffect } from 'react';
import PageContext from '../context/PageContext';

const usePath = (path) => {
    const { setPath } = useContext(PageContext);
    useEffect(() => {
        setPath(path);
    }, [setPath, path]);
};

export default usePath;
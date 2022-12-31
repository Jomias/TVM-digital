import { useState, useEffect } from "react";
import useAxiosFetch from "./useAxiosFetch";

const useData = (path, defaultList, name = '', getElement) => {

    const [list, setList] = useState([]);
    const { data, fetchError, isLoading } = useAxiosFetch(path);

    useEffect(() => {
        if (isLoading) return;
        if (!isLoading && fetchError != null) {
            alert(fetchError + ' in ' + name + '!! Given Default');
            setList(prevList => defaultList.map((item, index) => { return getElement(item, index) }));
            return;
        }
        setList(prevList => data.map((item, index) => { return getElement(item, index) }));

        // eslint-disable-next-line
    }, [fetchError, data, isLoading]);

    return { list };
};

export default useData;
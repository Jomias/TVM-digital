import { useState, useEffect } from 'react';

const useIntroduce = (page, data) => {

    const [title, setTitle] = useState(''); 
    const [paragraph, setParagraph] = useState('');
    const [imgURL, setImgURL] = useState('');

    useEffect(() => {
        for (var i = 0, len = data.length; i < len; ++i) {
            if (data[i].page === page) {
                setTitle(data[i].title);
                setParagraph(data[i].paragraph);
                setImgURL(data[i].imgURL);
                return;
            }
        }
    }, [data, page]);

    return { title , paragraph, imgURL };
}

export default useIntroduce;
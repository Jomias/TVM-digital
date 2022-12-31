import { createContext, useState } from "react";

const PageContext = createContext({});

export const PageProvider = ({ children }) => {

    const [path, setPath] = useState('');

    return (
        <PageContext.Provider value={{ path, setPath }}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;
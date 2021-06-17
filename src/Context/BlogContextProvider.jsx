import React, { createContext, useState } from 'react';


const BlogContext = createContext();

function BlogContextProvider({ children }) {

    const [showNav, setShowNav] = useState(false);


    const value = {
        showNav,
        setShowNav

    }

    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    );
}

export { BlogContextProvider, BlogContext }
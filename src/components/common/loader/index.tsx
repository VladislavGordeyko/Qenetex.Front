import React from 'react';
import './index.css'

interface ILoader {
    isLoading: boolean
}

const Loader = ({isLoading} : ILoader) => {
    return(
        <div className="container">
            {isLoading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
        </div>
    )
}
export default Loader;
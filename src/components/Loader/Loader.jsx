import React from 'react';
import loader from '../../assets/images/loader.gif'

const Loader = (props) => {

    return (
        <div className="loader-overlay">
            <img src={loader} alt="loading.." />
        </div>
    );
}
export default Loader;
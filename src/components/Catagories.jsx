import React, { use } from 'react';

// resolve a promise for fetching data
const catagoriesPromise = fetch("/categories.json").then((res)=> res.json());

const Catagories = () => {
    // for once rendaring data when load page use "use" hook
    const catagories = use(catagoriesPromise);
    return (
        <div>
            <h2 className='font-bold'>All Catagories ({catagories.length}) </h2>
        </div>
    );
};

export default Catagories;
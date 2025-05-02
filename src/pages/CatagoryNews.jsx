import React from 'react';
import { useParams } from 'react-router';

const CatagoryNews = () => {
    // how to use useParams 
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            Catagory News:{id}
        </div>
    );
};

export default CatagoryNews;
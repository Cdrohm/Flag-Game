import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [data, setData] = useState([])
    /*axios*/
    // le useEffect se joue lorsque le composant est monté

    useEffect (() => {
        axios
        .get("https://restcountries.com/v3.1/all")
        // setData => recup le tableau des pays
        .then((res) => setData(res.data))
    }, [])
    
    return (
        <div className='countries'>
            <h1>Countries</h1>
        </div>
    );
};

export default Countries;
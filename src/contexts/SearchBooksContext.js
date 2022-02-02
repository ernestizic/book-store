import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SearchBooksContext = createContext();

const SearchBooksContextProvider =(props)=> {

    const [search, setSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getQuery();
    }, [])

    const getQuery =(text)=> {
        axios.get(`https://api.itbook.store/1.0/search/${text}/2`)
            .then(res => 
               {
                setSearch(res.data.books)
                setIsLoading(false)
               }   
            )
            .catch(error => {
                console.log(error);
                setIsLoading(true);
            });
    }; 
    return ( 
        <SearchBooksContext.Provider value={{search, isLoading, getQuery}}>
            {props.children}
        </SearchBooksContext.Provider>
    );
}
export default SearchBooksContextProvider;

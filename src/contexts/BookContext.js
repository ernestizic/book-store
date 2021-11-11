import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const BookContext = createContext();

const BookContextProvider =(props)=> {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBooks();
    }, []);


    const fetchBooks =()=> {
        axios.get('https://api.itbook.store/1.0/new')
            .then(res => {
                //console.log(res.data.books)
                setBooks(res.data.books);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(true);
            });
    };

    const fetchFreeBook =()=> {
        axios.get('https://api.itbook.store/1.0/new')
            .then(res =>
                setBooks([...books.filter(book => book.price !== "$0.00")])
            );
    };


    return (
        <BookContext.Provider value={{books, isLoading, fetchFreeBook}}> 
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;

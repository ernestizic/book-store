import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const BookContext = createContext();

const BookContextProvider =(props)=> {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [freeBooks, setFreeBooks] = useState([])

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


    useEffect(() => {
        const freeBook =()=> {
            setFreeBooks(books.filter(book => book.price === '$0.00'))
        }
        freeBook()
    }, [books])


    return (
        <BookContext.Provider value={{books, isLoading, freeBooks}}> 
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;

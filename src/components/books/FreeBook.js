import React, {useContext} from 'react';
import { BookContext } from '../../contexts/BookContext';
import BookItem from './BookItem';

const FreeBook = () => {
    const {freeBooks} = useContext(BookContext);
    

    return freeBooks.length > 0 ? (
        freeBooks.map(book => (
            <BookItem key={book.isbn13} book={book} />
        ))
    ) : ( 
        <p style={{textAlign: 'center'}}>Nothing to see here</p>
     );
}
 
export default FreeBook;
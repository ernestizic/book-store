import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Rating from '../ui/Rating';
import Spinner from '../ui/Spinner';



const BookDetail = () => {

// https://cors.bridged.cc/https://api.itbook.store/1.0/books/${book_id}`
    const { book_id } = useParams();

    const [bookDetail, setBookDetail] = useState(null);

    useEffect(() => {
        axios.get(`https://api.itbook.store/1.0/books/${book_id}`)
            .then(res => {
                 //console.log(res.data)
                 setBookDetail(res.data)
            })
    }, [book_id])



    const book = bookDetail ? (
        <React.Fragment>
            <div className="container-fluid"id="welcome-div">
                <h2 style={{color: '#030d44', paddingLeft: '40px'}}> {bookDetail.title} </h2>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className='details-left-img'>
                            <img src={bookDetail.image} alt="book-img" className="img-fluid" />
                        </div>

                        {bookDetail.pdf ? (
                            <div className='details-left-btn'>
                                <a href={bookDetail.pdf["Free eBook"]} className="btn btn-primary">Free Download</a>
                            </div>
                        ) : (
                            <div className='details-left-btn'>
                                <button className="btn btn-danger">Buy</button>
                                <button className="btn btn-secondary">Preview</button>
                            </div>
                        )}
                        
                    </div>
                    <div className="col-md-9 table-details">
                        <table className="table table-striped">

                            <tbody>
                                <tr>
                                    <td>eBook</td>
                                    <td>
                                        {bookDetail.price === '$0.00' ? (
                                            <p style={{color: '#b2395b', fontWeight: 'bold'}}>Free eBook</p>
                                            ) : (
                                            <p className="card-text" style={{color: '#b2395b', fontWeight: 'bold'}}>{bookDetail.price}</p>
                                        ) }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Rating</td>
                                    <td> <Rating bookRating={bookDetail}/> </td>
                                </tr>
                                <tr>
                                    <td>Author</td>
                                    <td>{bookDetail.authors}</td>
                                </tr>
                                <tr>
                                    <td>Publisher</td>
                                    <td>{bookDetail.publisher}</td>
                                </tr>
                                <tr>
                                    <td>Published</td>
                                    <td>{bookDetail.year}</td>
                                </tr>
                                <tr>
                                    <td>Pages</td>
                                    <td>{bookDetail.pages}</td>
                                </tr>
                                <tr>
                                    <td>Language</td>
                                    <td>{bookDetail.language}</td>
                                </tr>
                                <tr>
                                    <td>ISBN-10</td>
                                    <td>{bookDetail.isbn10}</td>
                                </tr>
                                <tr>
                                    <td>ISBN-13</td>
                                    <td>{bookDetail.isbn13}</td>
                                </tr>
                            </tbody>

                        </table>

                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#home">Description</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu1">Free downloads</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu2">Authors</a></li>
                        </ul>

                        <div className="tab-content">
                            <div id="home" className="container tab-pane active">
                                <p id="desc">{bookDetail.desc}</p>
                            </div>

                            <div id="menu1" className="container tab-pane fade">
                                <p>Free eBook:</p>
                                {bookDetail.pdf ? (<a href={bookDetail.pdf["Free eBook"]} title="Free eBook"> {bookDetail.pdf["Free eBook"]} </a>) : (<p>Not available</p>)}

                            </div>
                            <div id="menu2" className="container tab-pane fade">
                                <p> {bookDetail.authors} </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    ) : (
        <div className="container"><Spinner /> </div>
    )
    return ( 
        <div>                         
            {book} 
        </div>
     );
}
 
export default BookDetail;

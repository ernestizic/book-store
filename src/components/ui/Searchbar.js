import React, { useContext,useState } from 'react';
import { SearchBooksContext } from '../../contexts/SearchBooksContext';
import {useHistory} from 'react-router';

const Searchbar = () => {

    const {getQuery} = useContext(SearchBooksContext);
    const history = useHistory();

    const [text, setText] = useState("");

    const handleSearch = async(e)=> {
        e.preventDefault();
        history.push ({
            pathname: `/search/?q=${text}`
        })
        //console.log(text)
        getQuery(text);
        //setText("");
    }

    return ( 
        <form className="search" onSubmit={handleSearch}>
            <div className="input-group">
                <input 
                    type="search" 
                    className="form-control"
                    placeholder="Search books by Title, Author or ISBN"
                    value={text}
                    onChange={(e)=> setText(e.target.value)} 
                    required
                />  
                <div className="input-group-append">
                    <button className="btn btn-danger" type="submit"> 
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
     );
}
 
export default Searchbar;
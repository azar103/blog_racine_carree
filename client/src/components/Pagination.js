import React from 'react'
import './Pagination.css'
import {Link} from 'react-router-dom';
const Pagination = ({booksPerPage, totalBooks, paginate}) => {
    const pageNumbers = [];
    for(let i= 1; i<= Math.ceil(totalBooks/booksPerPage);i++){
        pageNumbers.push(i);
    }

  


    return (
        <ul className="pagination">
        {pageNumbers.map((number) => 
            <li key={number} className="page-item">
            <Link to={`/page/${number}`} className="page-link"
            onClick={() => {
                paginate(number);
            }}
            >{number}</Link>
            </li>
        )}
        </ul>
    )
}

export default Pagination

import React, {useContext} from 'react';
import {bookContext} from '../contexts/bookContext';

const BookDetails = ({book}) => {
	const {removeBook} = useContext(bookContext);

	return (
		<li onClick={() => removeBook(book.id)}>
			<div className='title'>Title: {book.title}</div>
			<div className='author'> Author: {book.author}</div>
			<br />
			<hr />
		</li>
	);
};

export default BookDetails;

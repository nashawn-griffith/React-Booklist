import React, {useContext, Fragment} from 'react';
import {bookContext} from '../contexts/bookContext';
import BookDetails from './BookDeatils';

const BookList = () => {
	const {books} = useContext(bookContext);

	const displayBooks = () => {
		if (books.length === 0) {
			return <div className='empty'>No books to display</div>;
		}

		const Books = books.map(book => <BookDetails key={book.id} book={book} />);
		return <ul>{Books}</ul>;
	};

	return <Fragment>{displayBooks()}</Fragment>;
};

export default BookList;

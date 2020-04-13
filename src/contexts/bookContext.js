import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
//create book context
export const bookContext = createContext();

//create provider
const BookContextProvider = props => {
	const [books, setBooks] = useState([
		{title: 'name of the wind', author: 'patrick rothfuss', id: 1},
		{title: 'the final empire', author: 'brandon sanderson', id: 2},
	]);

	const addBook = (title, author) => {
		setBooks([...books, {title, author, id: uuidv4()}]);
	};

	const removeBook = bid => {
		setBooks(books.filter(({id}) => id !== bid));
	};

	let bookContextParams = {
		books,
		addBook,
		removeBook,
	};

	return <bookContext.Provider value={bookContextParams}>{props.children}</bookContext.Provider>;
};

export default BookContextProvider;

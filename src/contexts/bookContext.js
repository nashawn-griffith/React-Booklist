import React, {createContext, useReducer, useEffect} from 'react';

import bookReducer from '../reducers/bookReducer';
//create book context
export const bookContext = createContext();

//create provider
const BookContextProvider = props => {
	const [books, dispatch] = useReducer(bookReducer, []);

	/*Dispatch actions to:
        load data from local storage,
        add book to local storage,
        remove book to local storage

     */
	const loadData = () => {
		dispatch({
			type: 'LOAD_DATA',
		});
	};

	const addBook = (title, author) => {
		dispatch({
			type: 'ADD_BOOK',
			payload: {
				title,
				author,
			},
		});
	};

	const removeBook = id => {
		dispatch({
			type: 'REMOVE_BOOK',
			payload: {
				id,
			},
		});
	};

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
	}, [books]);

	let bookContextParams = {
		books,
		addBook,
		removeBook,
	};

	return <bookContext.Provider value={bookContextParams}>{props.children}</bookContext.Provider>;
};

export default BookContextProvider;

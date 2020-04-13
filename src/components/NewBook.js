import React, {useContext, useReducer} from 'react';
import {bookContext} from '../contexts/bookContext';

const NewBook = () => {
	const {addBook} = useContext(bookContext);

	const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}), {
		title: '',
		author: '',
	});

	const onChange = e => {
		const name = e.target.name;
		const newValue = e.target.value;
		setUserInput({[name]: newValue});
	};

	const submit = e => {
		e.preventDefault();
		addBook(userInput.title, userInput.author);
		userInput.title = '';
		userInput.author = '';
	};

	return (
		<form onSubmit={submit}>
			<input type='text' placeholder='Title' value={userInput.title} name='title' onChange={onChange} />
			<input type='text' placeholder='Author' value={userInput.author} name='author' onChange={onChange} />
			<input type='submit' value='add book' />
		</form>
	);
};

export default NewBook;

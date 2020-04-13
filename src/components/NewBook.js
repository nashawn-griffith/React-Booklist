import React, {useContext, useState} from 'react';
import {bookContext} from '../contexts/bookContext';

const NewBook = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const {addBook} = useContext(bookContext);

	const submit = e => {
		e.preventDefault();
		addBook(title, author);
		setTitle('');
		setAuthor('');
	};

	return (
		<form onSubmit={submit}>
			<input type='text' value={title} name='title' onChange={e => setTitle(e.target.value)} />
			<input type='text' value={author} name='author' onChange={e => setAuthor(e.target.value)} />
			<input type='submit' value='add book' />
		</form>
	);
};

export default NewBook;

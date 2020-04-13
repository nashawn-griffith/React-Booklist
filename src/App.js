import React from 'react';
import './App.css';
import BookContextProvider from './contexts/bookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBook from './components/NewBook';

function App() {
	return (
		<div className='App'>
			<BookContextProvider>
				<Navbar />
				<BookList />
				<NewBook />
			</BookContextProvider>
		</div>
	);
}

export default App;

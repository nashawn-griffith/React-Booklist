import React, {useContext} from 'react';
import {bookContext} from '../contexts/bookContext';

const Navbar = props => {
	const {books} = useContext(bookContext);

	return (
		<div className='navbar'>
			<h1>Nashawn Reading List</h1>
			<p> Currently has {books.length} in the collection</p>
		</div>
	);
};

export default Navbar;

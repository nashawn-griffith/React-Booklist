import {ADD_BOOK, REMOVE_BOOK, LOAD_DATA} from '../actions/types';
import {v4 as uuidv4} from 'uuid';

const bookReducer = (state, action) => {
	switch (action.type) {
		case ADD_BOOK:
			return [
				...state,
				{
					title: action.payload.title,
					author: action.payload.author,
					id: uuidv4(),
				},
			];

		case REMOVE_BOOK:
			return state.filter(book => book.id !== action.payload.id);

		case LOAD_DATA:
			return JSON.parse(localStorage.getItem('books'));

		default:
			return state;
	}
};

export default bookReducer;

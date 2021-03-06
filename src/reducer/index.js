import { combineReducers } from 'redux';
import count from './counter';
import articles from './articles';
import comments from './comments';
import filters from './filter';

export default combineReducers({
	count,
	articles,
	comments,
	filters
});
import {} from '../constants';
import { normalizedComments } from '../fixtures';
import { Record, List } from 'immutable';

const CommentModel = new Record({
    id: null,
    user: null,
    text: ''
});

const immutableComments = new  List(normalizedComments.map(comment => new CommentModel(comment)));

export default (comments = immutableComments, action) => {
    const { type, payload } = action;

    return comments;
}
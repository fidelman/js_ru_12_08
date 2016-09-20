import $ from 'jquery';
import { START, FAIL, SUCCESS } from '../constants';

export default store => next => action => {
    const { callAPI, type, ...rest } = action;
    if (!callAPI) return;

    next({
        type: type + START,
        ...rest
    });

    setTimeout(() => {
        $.get(callAPI)
            .done(response => {
                next({
                    ...rest,
                    type: type + SUCCESS,
                    response
                });
            })
            .fail(error => {
                next({
                    ...rest,
                    type: type + FAIL,
                    error
                });
            })
    }, 1000);

}
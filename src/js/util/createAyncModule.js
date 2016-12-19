import {asyncSuffixes} from '../constants';

export default function createAsyncModule (asyncKey, reducer = state => state, initialState, multi = false) {
    const asyncAction = asyncSuffixes.reduce((obj, action) => {
        obj[action] = `${asyncKey}_${action}`;
        return obj;
    }, {});
    const stateDefaults = multi ? fromJS({_requests: {}}) : fromJS({
        loading: false,
        loaded: false,
        error: false,
        data: {}
    });
    const newInitialState = initialState ? initialState.merge(stateDefaults) : stateDefaults;
    return function(state, action) {
        const newState = reducer ? reducer.apply(this, [state || newInitialState, action]) : stateDefaults;
        let finalState;
        switch (action.type) {
            case asyncAction.LOADING:
                finalState = {
                    loading: true,
                    loaded: false,
                    error: false
                };
                break;
            case asyncAction.SUCCESS:
                finalState = {
                    data: action.result,
                    loading: false,
                    loaded: true,
                    error: false
                };
                break;
            case asyncAction.FAIL:
                if (action.error.code) {
                    action.error.message = ERROR_CODES[action.error.code];
                }
                finalState = {
                    loading: false,
                    loaded: false,
                    error: action.error
                };
                break;
            default:
                return newState;
        }
        if (multi && !action.lookup) {
            throw Error('Actions for async array stores must provide a lookup');
        }
        return multi ? newState.setIn(['_requests', action.lookup], fromJS(finalState)) : newState.merge(fromJS({...finalState}));
    };
}


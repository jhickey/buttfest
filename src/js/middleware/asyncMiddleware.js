export default function asyncMiddleware({dispatch}) {
    return next => async action => {
        if (!action.promise) {
            next(action);
            return;
        }
        const [LOADING, SUCCESS, FAILURE] = action.type;
        dispatch({type: LOADING});
        try {
            const result = await action.promise();
            dispatch({type: SUCCESS, result});
        } catch (e) {
            dispatch({type: FAILURE, error: e});
        }

    }
}
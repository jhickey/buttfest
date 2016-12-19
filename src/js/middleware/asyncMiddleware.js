export default function asyncMiddleware() {
    return ({dispatch, getState}) => {
        return next => async (action) => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }

            const { promise, types, key, lookup = null, ...rest } = action;
            if (!promise) {
                return next(action);
            }

            const [REQUEST, SUCCESS, FAILURE] = types || ['LOADING', 'SUCCESS', 'FAIL'].map(actionType => `${key}_${actionType}`);

            next({...rest, lookup, type: REQUEST});
            try {
                const result = await promise();
                next({...rest, result, lookup, type: SUCCESS});
            } catch (error) {
                next({...rest, error, lookup, type: FAILURE});
            }
        };
    };
}

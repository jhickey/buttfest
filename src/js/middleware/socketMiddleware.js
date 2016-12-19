import io from 'socket.io-client';
import {socketActionTypes} from '../constants';

export default function socketMiddleware(eventName) {
    const socket = io.connect(process.env.API_HOST);
    return ({dispatch}) => {
        socket.on(eventName, data => {
            dispatch({
                type: socketActionTypes.SOCKET_DATA,
                payload: data
            })
        });
        socket.on('connect_error', e => {
            dispatch({
                type: socketActionTypes.SOCKET_ERROR,
                payload: e,
                error: true
            })
        });
        socket.on('reconnect', data => {
            dispatch({
                type: socketActionTypes.SOCKET_RECONNECT,
                payload: data
            })
        });
        return next => async(action) => {
            next(action);
        };
    };
}

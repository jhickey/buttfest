export const SHORTEN_LOADING = '/shortener/SHORTEN_LOADING';
export const SHORTEN_SUCCESS = '/shortener/SHORTEN_SUCCESS';
export const SHORTEN_FAILURE = '/shortener/SHORTEN_FAILURE';

function getShortenedUrl() {
    return new Promise(resolve => {
        setTimeout(() => resolve('http://sr.jh/gy17r'), 1000)
    });
}

export function shortenUrl(url) {
    return {
        type: [SHORTEN_LOADING, SHORTEN_SUCCESS, SHORTEN_FAILURE],
        promise: () => getShortenedUrl(url)
    }
}

const initialState = {
    loading: false,
    loaded: false,
    error: null,
    data: null
};

export default function shorten(state = initialState, action) {
    switch(action.type) {
        case SHORTEN_LOADING:
            return {
                loading: true,
                loaded: false,
                error: null,
                data: null
            };
        case SHORTEN_SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                data: action.result
            };
        case SHORTEN_FAILURE:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                data: null
            };
        default:
            return state;
    }
}
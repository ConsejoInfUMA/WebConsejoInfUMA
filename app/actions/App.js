import {StorageConnector} from '../utility/storageConnector';

export const LOAD_FROM_STORAGE = 'LOAD_FROM_STORAGE';

export const loadFromStore = (url, id) => dispatch => {
    StorageConnector(url).then(httpUrl => {
        dispatch({
            type: LOAD_FROM_STORAGE,
            url,
            id,
            httpUrl
        });
    });
};

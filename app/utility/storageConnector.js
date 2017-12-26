import * as firebase from 'firebase';

/*
 * Storage connector return url of a file from the firebase storage.
 */
export const StorageConnector = (urlStorage) => {
    const storage = firebase.storage();
    const urlReference = storage.refFromURL(urlStorage);
    return urlReference.getDownloadURL();
};

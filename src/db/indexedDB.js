import {openDB} from 'idb'

const initdb = () => {
    if (!('indexedDB' in window)) {
        throw new Error('Browser does not support IndexedDB')
    }

    return openDB('fronteiras_db', 1,  {
        upgrade (db) {
            if (!db.objectStoreNames.contains('comunidades')) {
                const objectStore = db.createObjectStore('comunidades', {
                    keyPath: 'id',
                    autoIncrement: true,
                })

                // objectStore.createIndex('localizacao', 'localizacao', {unique: true})
            }
        }
    })
}

const addObjectStore = async (storeName, newData) => {
    try {
        const db = await initdb()
        const transaction = db.transaction(storeName, 'readwrite')
        const store = transaction.objectStore(storeName)

        store.put(newData)

        return transaction.complete
    } catch (err) {
        return err
    }
}

const listAllObjectStore = async storeName => {
    try {
        const db = await initdb()
        const transaction = db.transaction(storeName, 'readonly')
        const store = transaction.objectStore(storeName)

        return store.getAll()
    } catch (err) {
        return err
    }
}

const deleteObjectStore = async (storeName, key) => {
    try {
        const db = await initdb()
        const transaction = db.transaction(storeName, 'readwrite')
        const store = transaction.objectStore(storeName)

        store.delete(key)

        return transaction.complete
    } catch (err) {
        return err
    }
}

export default {
    addObjectStore,
    listAllObjectStore,
    deleteObjectStore
}

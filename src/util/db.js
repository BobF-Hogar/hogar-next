const DEVICE_STORE_NAME = "deviceData";

let database;

// IndexedDB wrapper
class LocalDB {
    constructor(newDB) {
        this.busy = false;
        this.db = newDB;

        this.db.onerror = (event) => {
            // TODO!
            console.error(`Database error: ${event.target.errorCode}`);
        };
    }

    // Takes an array or single item, returns in same format.
    getDeviceData(data) {
        return new Promise((resolve) => {
            const workingData = (Array.isArray(data)) ? data : [ data ];

            const objectStore = this.db.transaction(DEVICE_STORE_NAME).objectStore(DEVICE_STORE_NAME);

            Promise.all(workingData.map((id) => {
                return new Promise((res) => {
                    const request = objectStore.get(id);

                    request.onerror = () => {
                        res();
                    }

                    request.onsuccess = () => {
                        res(request.result);
                    }
                });
            })).then((results) => {
                resolve((Array.isArray(data)) ? results : results[0]);
            });
        });
    }

    addDeviceData(data) { return this._queueTransaction(this._addDeviceData, data); }
    updateDeviceData(data) { return this._queueTransaction(this._updateDeviceData, data); }
    removeDeviceData(data) { return this._queueTransaction(this._removeDeviceData, data); }
    clearDeviceStore() { return this._queueTransaction(this._clearDeviceStore); }

    // Takes an array or single item, returns in same format.
    _addDeviceData(idData) {
        return new Promise((resolve) => {
            const workingData = (Array.isArray(idData)) ? idData : [ idData ];

            const objectStore = this.db.transaction(DEVICE_STORE_NAME, "readwrite").objectStore(DEVICE_STORE_NAME);

            Promise.all(workingData.map((device) => {
                return new Promise((res) => {
                    const request = objectStore.add(device);

                    request.onerror = () => {
                        res(false);
                    }

                    request.onsuccess = () => {
                        res(true);
                    }
                });
            })).then((results) => {
                resolve((Array.isArray(idData)) ? results : results[0]);
            });
        });
    }

    // Takes an array or single item, returns in same format.
    _updateDeviceData(data) {
        return new Promise((resolve) => {
            const workingData = (Array.isArray(data)) ? data : [ data ];

            const objectStore = this.db.transaction(DEVICE_STORE_NAME, "readwrite").objectStore(DEVICE_STORE_NAME);

            Promise.all(workingData.map((device) => {
                return new Promise((res) => {
                    const request = objectStore.put(device);

                    request.onerror = () => {
                        res(false);
                    }

                    request.onsuccess = () => {
                        res(true);
                    }
                });
            })).then((results) => {
                resolve((Array.isArray(data)) ? results : results[0]);
            });
        });
    }

    // Takes an array or single item, returns in same format.
    _removeDeviceData(data) {
        return new Promise((resolve) => {
            const workingData = (Array.isArray(data)) ? data : [ data ];

            const objectStore = this.db.transaction(DEVICE_STORE_NAME, "readwrite").objectStore(DEVICE_STORE_NAME);

            Promise.all(workingData.map((device) => {
                return new Promise((res) => {
                    const request = objectStore.delete(device?.id || device);

                    request.onerror = () => {
                        res(false);
                    }

                    request.onsuccess = () => {
                        res(true);
                    }
                });
            })).then((results) => {
                resolve((Array.isArray(data)) ? results : results[0]);
            });
        });
    }

    _clearDeviceStore() {
        return new Promise((resolve) => {
            const objectStore = this.db.transaction(DEVICE_STORE_NAME, "readwrite").objectStore(DEVICE_STORE_NAME);

            const request = objectStore.clear();

            request.onerror = () => {
                res(false);
            }

            request.onsuccess = () => {
                res(true);
            }
        });
    }

    _queueTransaction(func, data) {
        return new Promise((resolve) => {
            if (this.busy) {
                // Maybe there's a better solution than recursive Promises?
                setTimeout(() => {
                    this._queueTransaction(func, data).then(resolve);
                }, 100);
            } else {
                this.busy = true;

                func(data).then((result) => {
                    this.busy = false;
                    resolve(result);
                });
            }
        });
    }
}

export function createLocalDB() {
    return new Promise((resolve) => {
        const request = window.indexedDB.open("HogarNext", 1);

        request.onerror = (event) => {
            console.log("Error!  Could not open indexedDB!");
            database = new LocalDB();
            resolve(database);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            db.createObjectStore(DEVICE_STORE_NAME, { keyPath: "id" });
        }

        request.onsuccess = (event) => {
            const newDB = event.target.result;
            database = new LocalDB(newDB);
            resolve(database);
        };
    });
}

export default database;
export class crud_indexeddb {
    private dbName: string;
    private storeName: string;
    
    constructor(dbName: string, storeName: string) {
        this.dbName = dbName;
        this.storeName = storeName;
    }

    // Iniciar base de datos
     private static initDB(dbName: string, storeName: string): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request: IDBOpenDBRequest = indexedDB.open(dbName, 1);

            request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(storeName)) {
                    db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
                }
            };

            request.onsuccess = () => {
                resolve(request.result);
            }
            request.onerror = () => reject(request.error);
        });
    }

    // Crear una transacción y un almacén de objetos basic
    private static async basic(dbName: string, storeName: string) {
        const db = await crud_indexeddb.initDB(dbName, storeName);
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);

        return store
    };

    // agregar datos
    static async addDataItem(dbName: string, storeName: string, dato: any): Promise<void> {
        const store = await this.basic(dbName, storeName);
        store.add(dato);
    }

    // eliminar datos
    static async remDataItem(dbName: string, storeName: string, id: number): Promise<void> {
        const store = await this.basic(dbName, storeName);
        store.delete(id);
    }

    // modificar datos
    static async updDataItem(dbName: string, storeName: string, xData: any): Promise<void> {
        const store = await this.basic(dbName, storeName);
        store.put(xData);
    }

    // ver datos
    static async getData(dbName: string, storeName: string): Promise<any[]> {
        const store = await this.basic(dbName, storeName);
        const request = store.getAll();

        return new Promise((resolve) => {
            request.onsuccess = () =>  resolve(request.result); 
        });
    }


}
export class crud_indexeddb {
    private dbName: string;
    private storeName: string;

    constructor(dbName: string, storeName: string) {
        this.dbName = dbName;
        this.storeName = storeName;
    }

    // Iniciar base de datos
    private initDB(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request: IDBOpenDBRequest = indexedDB.open(this.dbName, 1);

            request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: "id", autoIncrement: true });
                }
            };

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    // Crear una transacción y un almacén de objetos basic
    private async basic() {
        const db = await this.initDB();
        const tx = db.transaction(this.storeName, "readwrite");
        const store = tx.objectStore(this.storeName);
        return store
    };

    // agregar datos
    async addDataItem(dato: any): Promise<void> {
        const store = await this.basic();
        store.add(dato);
    }

    // eliminar datos
    async remDataItem(id: number): Promise<void> {
        const store = await this.basic();
        store.delete(id);
    }

    // modificar datos
    async updDataItem(xData: any): Promise<void> {
        const store = await this.basic();
        store.put(xData);
    }

    // ver datos
    async getData(): Promise<any[]> {
        const store = await this.basic();
        const request = store.getAll();

        return new Promise((resolve) => {
            request.onsuccess = () => resolve(request.result);
        });
    }


}
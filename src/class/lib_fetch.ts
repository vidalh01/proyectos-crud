export class FTH {

    constructor() {

    }

    /**
     * 
     * @param url es la url de la api
     * @returns esta la respuesta de la api
     * @description esta funcion hace una peticion a la api y devuelve la respuesta
     * @example
     * const data = await FTH.get(url);
     * console.log(data);
     */
    static async get(url: string): Promise<any> {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    /**
     * 
     * @param url es la url de la api
     * @param xData es el objeto que se va a enviar a la api
     * @returns no devuelve nada
     * @description esta funcion hace una peticion a la api y no devuelve nada
     * @example
     * const data = await FTH.post(url, xData);
     * console.log(data);
     */
    static async post(url: string, xData: any): Promise<any> {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(xData)
        })
    }

    /**
     * 
     * @param url es la url de la api
     * @returns no devuelve nada
     * @description esta funcion borra un objeto de la api
     * @example
     * const data = await FTH.del(url);
     * console.log(data);
     */
    static async del(url: string): Promise<any> {
        await fetch(url, { method: 'DELETE' })
    }

    /**
     * 
     * @param url es la url de la api
     * @param xData es el objeto que se va a enviar a la api
     * @returns no devuelve nada
     * @description esta funcion hace una peticion a la api para actualizar un objeto
     * @example
     * const data = await FTH.put(url, xData);
     * console.log(data);
     */
    static async patch(url: string, xData: any) {
        await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(xData)
        })
    }

}
export class crud_array {
    constructor() {
        
    }

    static addItem(array: any[], item: any) {
        array.push(item);
    }

    static remItem(array: any[], index: number) {
        array.splice(index, 1);
    }

}
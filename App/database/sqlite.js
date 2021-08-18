import { openDatabase } from "react-native-sqlite-storage";

export default class DbContext {
    constructor() {
        this.db = openDatabase({name: 'hoosh-azmoon.db', location: 'default'});
    }

    createTable = () => {};
    insert = () => {};
    get = () => {};
    remove = () => {};
    update = () => {};
}
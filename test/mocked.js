export class Dictionary {
    constructor() {
        this.data = new Map(); // Private storage for key-value pairs
    }

    // Set method to add or update a value for a given key
    set(data) {
        for (const key in data) {
            this.data.set(key, data[key]);
        }
    }

    // Get method to retrieve a value by key
    get(key, fun = undefined) {
        // return this.data.hasOwnProperty(key) ? this.data[key] : undefined;
        if (fun) {
            return fun(this.data);
        }
        return this.data[key];
    }

    // Method to check if a key exists
    has(key) {
        return this.data.hasOwnProperty(key);
    }

    // Method to remove a key-value pair
    delete(key) {
        if (this.has(key)) {
            delete this.data[key];
            return true;
        }
        return false;
    }

    // Method to retrieve all keys
    keys() {
        return Object.keys(this.data);
    }

    // Method to retrieve all values
    values() {
        return Object.values(this.data);
    }

    // Method to retrieve all key-value pairs as an array of tuples
    entries() {
        return Object.entries(this.data);
    }

    // Method to clear all entries
    clear() {
        this.data = new Map();
    }
}
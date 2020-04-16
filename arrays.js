const Memory = require('./memory.js');

class Array {
    constructor() {
        this.memory = new Memory();
        this.length = 0;
        this.ptr = this.memory.allocate(this.length);
    }
    push(value) {
        this._resize(this.length + 1);
        this.memory.set(this.ptr + this.length, value);
        this.length++;
    }
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = this.memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        this.memory.copy(this.ptr, oldPtr, this.length);
        this.memory.free(oldPtr);s
        this.capacity = size;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return this.memory.get(this.ptr + index);
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = this.memory.get(this.ptr + this.length - 1);
        return value;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        this.memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        this.memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}
Array.SIZE_RATIO = 3

module.exports = Array;

/*
 * Programming Quiz: Make An Iterable Object
 *
 * Turn the `james` object into an iterable object.
 *
 * Each call to iterator.next should log out an object with the following info:
 *     - key: the key from the `james` object
 *     - value: the value of the key from the `james` object
 *     - done: true or false if there are more keys/values
 *
 * For clarification, look at the example console.logs at the bottom of the code.
 */

const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185,
    [Symbol.iterator]: function () {
                            return {
                                properties: ['name', 'height', 'weight'],
                                position: 0,
                                next: function() {
                                    this.position++;
                                    let key = this.properties[this.position - 1]
                                    let done = this.position >= 3;
                                    return {value: james[key], key, done}
                                }
                            }
                        }
};

let iterator = james[Symbol.iterator]();

console.log(iterator.next()); // 'James'
console.log(iterator.next()); // `5'10`
console.log(iterator.next()); // 185
console.log(iterator.next());

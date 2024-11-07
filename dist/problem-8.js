"use strict";
{
    const validateKeys = (obj, keys) => {
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}

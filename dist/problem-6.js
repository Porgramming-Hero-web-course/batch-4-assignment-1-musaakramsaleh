"use strict";
{
    const updateProfile = (obj, updates) => {
        const w = Object.assign(Object.assign({}, obj), updates);
        return w;
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
}

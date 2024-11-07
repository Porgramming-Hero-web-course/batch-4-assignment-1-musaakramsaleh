"use strict";
{
    const countWordOccurences = (word, lime) => {
        const words = word.toLowerCase();
        const limes = lime.toLowerCase();
        const result = words.split(/\W+/);
        const count = result.filter(w => w.startsWith(limes));
        console.log(result);
        return count.length;
    };
    console.log(countWordOccurences('Typescript is great. I love typescript!', 'typescript'));
}

const countWordOccurences=(word:string,lime:string):number =>{
    const words:string = word.toLowerCase();
    const limes:string = lime.toLowerCase();
    const result: string[] = words.split(/\W+/);
    const count:string[] = result.filter(w=> w.startsWith(limes));
    console.log(result)
 return count.length
}
console.log(countWordOccurences('Typescript is great. I love typescript!','typescript'))
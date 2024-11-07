const removeDuplicates=(arr:number[]):number[] =>{
    const w:number[] = []
    for (const element of arr){
        if(!w.includes(element)){
           w.push(element)
        }
    }
  return w
}
console.log(removeDuplicates([1,2,2,3,4,4,5]))
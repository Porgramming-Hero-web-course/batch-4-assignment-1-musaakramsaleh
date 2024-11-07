{
    type Circle = {
        shape: 'circle';
        radius: number
       }
       type Rectangle ={
         shape: 'rectangle';
         width: number;
         height: number;
       }
       const calculateShapeArea = (pq:Circle | Rectangle):number=>{
           if(pq.shape == 'circle'){
               return Math.PI * pq.radius
           }
           else{
               return pq.height * pq.width
           }
       }
       const po: number = calculateShapeArea({shape:'rectangle',width:4,height:6})
       console.log(po)
}
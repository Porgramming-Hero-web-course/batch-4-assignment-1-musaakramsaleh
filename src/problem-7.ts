{
    class Car {
        make: string;
        model: string;
        year: number;
     constructor(make:string,model:string,year:number){
         this.make = make
         this.model = model
         this.year = year
     }
      getCarAge(){
       const age:number = 2024 - this.year
       return age
     }
     }
     const car = new Car("Honda","Civic",2018)
     console.log(car.getCarAge())
}
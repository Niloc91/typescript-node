class Examplefunctions{



    //Simple arithmetic
    adder(first:number, second:number) : number {
        return first + second
    }

    typeAssertion(first:string, second:string):number{
        let first2:number = <number> <any> first;
        let second2: number = <number> <any> second;

        return first2 + second2
    }



}
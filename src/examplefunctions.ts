class Examplefunctions{



    //Simple arithmetic
    adder(first:number, second:number) : number {
        return first + second
    }

    //still need to deal with cases like this, where the output is not whats expected
    typeAssertion(first:string, second:string):number{
        let first2:number = <number> <any> first;
        let second2: number = <number> <any> second;

        return first2 + second2
    }


}

export default new Examplefunctions();
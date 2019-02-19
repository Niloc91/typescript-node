const Monitor = require('./Monitor');

//Export class with static functions
export default class Examplefunctions{

    //Simple arithmetic
    static adder(first:number, second:number) : number {
        Monitor.numOfRequests.inc(1);
        return first + second
    }

    //still need to deal with cases like this, where the output is not whats expected
    static typeAssertion(first:string, second:string):number{
        let first2:number = <number> <any> first;
        let second2: number = <number> <any> second;

        Monitor.numberOfRequests.inc(1);

        return first2 + second2
    }


    static countevens(x:number):number{
        let count = 0

        for(let num=0;num<=x;num++) {
            if (num % 2!=0) {
                continue
            }
            count++
        }

        return count
    }


}

//export default new Examplefunctions();
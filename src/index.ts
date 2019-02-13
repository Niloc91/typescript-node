import {Greeter} from "./greeter";
import Examplefunctions from "./examplefunctions";
import Asyncexamples from "./asyncexamples";

console.log(Greeter('Colin2'));
console.log(Examplefunctions.adder(1,5));
console.log(Examplefunctions.typeAssertion("1","3"));
console.log(Promise.resolve(Asyncexamples.addasync()));
console.log(Examplefunctions.countevens(12));

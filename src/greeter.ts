const Monitor = require('./Monitor');

export function Greeter(name:string): string {

    Monitor.numOfRequests.inc(1);

    return 'Hello there, ' + name + '!';
}





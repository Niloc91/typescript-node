class Asyncexamples{

    async addasync () : Promise<number>{
        let sum =0;
        try{
            const a = await this.doubleAfter2Seconds(10);
            const b = await this.doubleAfter2Seconds(20);
            const c = await this.doubleAfter2Seconds(30);
            sum = a + b + c;
        }catch(e){

        }

        console.log(sum);
        return sum
    }


    //return result after 2 seconds
    doubleAfter2Seconds(x) :Promise<number>{
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x * 2);
            }, 2000);
        });
    }

}

export default new Asyncexamples()
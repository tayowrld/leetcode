function romanToInt(s: string): number {
    const alphArr = ['I','V','X','L','C','D','M','IV','IX','XL','XC','CD','CM']
    const numArr = [1,5,10,50,100,500,1000,4,9,40,90,400,900]
    const numberRoman = Array.from(s)
    let res:number = 0;
    for (let i = 0; i < numberRoman.length; i++){
        let inAlphIndex = alphArr.indexOf(numberRoman[i]);
        let nextIndex = alphArr.indexOf(numberRoman[i+1]);
        if (numArr[nextIndex] > numArr[inAlphIndex]){
            res += numArr[nextIndex] - numArr[inAlphIndex]
            console.log(i, numArr[inAlphIndex], numArr[inAlphIndex])
            i++
        }else{
            res += numArr[inAlphIndex]
        }
    }
    return res
};

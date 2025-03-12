function longestCommonPrefix(strs: string[]): string {
    let currentPref:string = "aaaaasdsdsddsdsdsdsdsdsddsdsddsdsddsdsdsdsdsdsdsdsddsdsdsddsdsdsdsddsdsdsdsddsdsdsdsdsdsdsdsdssdsdsdsddsdsdsdsdaaaaasdsdsddsdsdsdsdsdsddsdsddsdsddsdsdsdsdsdsdsdsddsdsdsddsdsdsdsddsdsdsdsddsdsdsdsdsdsdsdsdssdsdsdsddsdsdsdsdaaaaasdsdsddsdsdsdsdsdsddsdsddsdsddsdsdsdsdsdsdsdsddsdsdsddsdsdsdsddsdsdsdsddsdsdsdsdsdsdsdsdssdsdsdsddsdsdsdsdaaaaasdsdsddsdsdsdsdsdsddsdsddsdsddsdsdsdsdsdsdsdsddsdsdsddsdsdsdsddsdsdsdsddsdsdsdsdsdsdsdsdssdsdsdsddsdsdsdsd"
    strs.forEach((str)=>{
        if (str.length < currentPref.length){
            currentPref = str
        }
    })
    strs.forEach((word)=>{
        while(!word.slice(0,currentPref.length).includes(currentPref)){
            currentPref = currentPref.slice(0, currentPref.length - 1)
        }
    })
    return currentPref
}

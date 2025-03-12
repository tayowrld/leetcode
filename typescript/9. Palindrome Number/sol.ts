function isPalindrome(x: number): boolean {
    const arrInt:string[] = Array.from(x.toString())
    let $pal = true;
    for (let i = 0; i < arrInt.length; i++){
        if(arrInt[i] != arrInt.reverse()[i]){
            $pal = false
        }
    }
    return($pal)
};

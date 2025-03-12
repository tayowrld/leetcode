function twoSum(nums: number[], target: number): number[] | undefined {
    const resultMap = new Map<number, number>()
    for (let i = 0; i < nums.length; i++){
        const completement = target - nums[i]
        if (resultMap.has(completement)){
            return[resultMap.get(completement)!, i]
        }
        resultMap.set(nums[i],i)
    }
};

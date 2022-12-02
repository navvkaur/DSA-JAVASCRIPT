var getConcatenation = function(nums) {
    let arr = [];
    for (let i = 0;i<nums.length;i++)
        {
            arr[i] = nums[i];
            arr[i+nums.length] = nums[i];
        }
    return arr;
};


let nums = [1,2,3,4,5];
console.log(getConcatenation(nums));

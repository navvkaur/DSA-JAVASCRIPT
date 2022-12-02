ar smallerNumbersThanCurrent = function(nums) {
    let arr=[];
    let count=0;
    for(let i=0;i<nums.length;i++)
    {//8
        count=0;
        for(let j=0;j<nums.length;j++)
        {
            //8
            //1
            if(nums[i]>nums[j])
            {
                count++;
                
            }
        }
        arr[i] = count;
            }
        return arr;
};

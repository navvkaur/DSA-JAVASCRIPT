var shuffle = function(nums, n) {
    let arr = [];
    let e = 0;
    let pos = 0;
   while(pos < nums.length)
   {
      if(pos%2 == 0)
      {
          arr[pos ] = nums[e];
          e++;
          pos++;
      }
      else
      {
          arr[pos] = nums[n];
          n++;
          pos++;      }
   }



   return arr;
};

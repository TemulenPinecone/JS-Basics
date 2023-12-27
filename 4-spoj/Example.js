let a = 10;
let nums = [1, 2, 3, 4, 5];
function test(nums) {
    nums[0] = 10;
  console.log("Local :", nums);
}
console.log("Global:", nums);

test(nums);

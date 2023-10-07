const nums = [1,2,3,4,5,6,7,8,9];

const len = nums.length;

console.log(len);

console.log(nums[len-1]);

for (let i = 0; i < len; i++) {
    const element = nums[i];
    console.log(element);
}

nums.forEach(function(element) {
    console.log(element);
});
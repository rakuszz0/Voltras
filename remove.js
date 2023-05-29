function removeDuplicate(nums) {
    let result = [];
    let seen = {};

    for (let i = nums.length - 1; i >= 0; i--) {
        if (!seen[nums[i]]) {
            result.push(nums[i]);
            seen[nums[i]] = true;
        }
    }

    return result.reverse();
}

let nums = [3, 4, 4, 3, 6, 3];
let result = removeDuplicate(nums);
console.log(result);


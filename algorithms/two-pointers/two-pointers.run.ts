// import { twoPointer } from ".";
// import { twoPointer } from "./two-pointers";

import { twoPointers } from "./two-pointers";

const args = process.argv.slice(2);
const arr = eval(args[0]);

// TODO: Add checks for arr.

twoPointers(arr);

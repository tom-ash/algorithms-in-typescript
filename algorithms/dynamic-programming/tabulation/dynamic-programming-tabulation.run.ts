import { dynamicProgrammingTabulation } from "./dynamic-programming-tabulation";

const args = process.argv.slice(2);
const arr = eval(args[0]);

// TODO: Add checks for arr.

dynamicProgrammingTabulation(arr);

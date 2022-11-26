const key1 = "object1";
const key2 = "object2";

const val1 = "value1";
const val2 = "value2";

const obj = {
  [key1]: val1,
  [key2]: val2
};
console.log(obj);
const spread = { ..."1234567890" };
console.log(spread);
const newobj = spread;
console.log("dfgfg", newobj);

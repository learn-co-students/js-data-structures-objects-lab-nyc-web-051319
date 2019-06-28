// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, { [key]: value});
}
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key){
  let newDriver = {...obj}
  // Object.assign(newDriver, obj)
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key]
  return obj
}

// const obj = { foo: "bar" };
//
// const newObj = Object.assign({}, obj);
//
// newObj;
// // => { foo: "bar" }
//
// delete newObj['foo'];
// // => true
//
// newObj;
// // => {}
//
// obj;
// // => { foo: "bar" }

// function destructivelyUpdateObject (obj, key, value) {
//   obj[key] = value;
//
//   return obj;
// }

// function nondestructivelyUpdateObject(obj, key, value) {
//   return Object.assign({}, obj, { [key]: value });
// }

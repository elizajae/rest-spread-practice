const filterOutOdds = (...arguements) => {
    return arguements.filter(num => num % 2 === 0);
}

const findMin = (...nums) =>  Math.min(...nums);

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

const doubleAndReturnArgs = (arr, ...nums) => {
    return [...arr, ...nums.map((x) => x * 2)]   
}

// SLICE AND DICE

const removeRandom = (items) => {
    let toRemove = Math.floor(Math.random() * items.length);
  return [...items.slice(0, toRemove), ...items.slice(toRemove + 1)];
}

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2]
}

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val}
}

const removeKey = (obj, val) => {
    const newObj = obj

    delete newObj[key]

    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

const update = (obj, key, val) => {
    let newObj = {...obj}

    newObj[key] = val;

    return newObj;
}
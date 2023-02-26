const hasSameEliments = (a, b) => {
    return a.length === b.length && a.every((v, i) => v === b[i]);
}

console.log(hasSameEliments([1, 2], [1, 2])) // true
console.log(hasSameEliments([1, 2], [2, 3])) // fasle
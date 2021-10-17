
function sum(a, b) {

    return a + b
}

function myOwnMultiplyFunction(a, b) {

    return a * b
}

function isBelowZero(x) {

    if (x < 0) {

        return true
    }
    else if (x > 0) {

        return false
    }
}

function roundWhole(x){

    return Math.round(x)
}

function addingUp(x){

    let sum = 0

    for (let i = 1; i <= x; i++) {
        
        sum += i
    }

    return sum
}

function findMinMax(y){

    const x = [...y]
    x.sort(function(a, b){return a - b})

    let minmax = {min: x[0], max: x[x.length - 1]}

    return minmax
}

function afterXmasEve2020(date){

    let d = new Date(date)
    let xmas2k20 = new Date('2020-12-24')

    if (d >= xmas2k20) {
        return true
    }
    else{
        return false
    }
}

function sortByStringLength(y){

    const x = [...y]

    x.sort(function(a, b) {
        let c = a.length
        let d = b.length
        if (c < d) {
            return -1
        }
        if (c > d) {
            return 1
        }
        
        return 0
    })

    return x
}

function charCounter(x, y){

    const re = new RegExp(x, 'g')

    return ((y.toLowerCase().match(re) || []).length)
}

function numbersOnly(y){

    return y.filter(Number.isFinite)
}

function sortNumbers(x, y){

    if (y > 0) {
        return x.sort(function(a, b){return a - b})
    }
    if (y < 0) {
        return x.sort(function(a, b){return b - a})
    }
}

function personFactory(first, last){

    const person ={
        firstname: first[0].toUpperCase() + first.slice(1),
        lastname: last[0].toUpperCase() + last.slice(1),
        fullname: `${first[0].toUpperCase() + first.slice(1)} ${last[0].toUpperCase() + last.slice(1)}`,
        initials: `${first[0].toUpperCase()}.${last[0].toUpperCase()}`
    }

    return person
}

function doublePrice(p){

    for (let i = 0; i < p.length; i++) {

        p[i].price *= 2      
    }

    return p
}

function isBothTrue(x, y){

    if (x === true && y === true){
        
        return true
    }
    else return false
}

function removeLeadingTrailing(x){

    y = Number(x)

    return y
}

function getKeysAndValues(x){

    const y = {
        keys: Object.keys(x),
        values: Object.values(x)
    }

    return y
}

// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = roundWhole
module.exports.addingUp = addingUp
module.exports.findMinMax = findMinMax
module.exports.afterXmasEve2020 = afterXmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = isBothTrue
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues

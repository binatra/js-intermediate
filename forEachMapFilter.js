// https://www.rithmschool.com/courses/intermediate-javascript/javascript-iterators-foreach-map-filter

function printFirstAndLast(array){
    array.forEach(element => {
        console.log(element[0] + element.slice(-1));
    });
}

function addKeyAndValue(array, key, value){
    array.forEach(element => {
       element[key] = value;
    });
    console.log(array);
}

function valTimesIndex(array){
    return array.map(function(val, index){
        return index*val;
    });
}

function extractKey(array, key){
    return array.map(function(val){
        return val[key];
    });
}

function filterLetters(array, char){
    let count = 0;
    array.filter(function(val){
        if(val.toLowerCase() === char.toLowerCase()){
            count++;
        }
    })
    return count;
}
function filterKey(array, key){
    return array.filter(function(val){
        return val[key];
    })
}

console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious"))
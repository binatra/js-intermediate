//https://www.rithmschool.com/courses/javascript/javascript-functions-parameters-and-scope

function average(array){
    let total = 0;
    let avg = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    avg = total/array.length;
    return avg;
}

function createStudent(name, surname){
    return {
        firstName : name,
        lastName : surname
    }
}

let std1 = createStudent('artan', 'minci');
let std2 = createStudent('besnik', 'thaqi');
let std3 = createStudent('enes', 'salaji');

let students = [std1, std2, std3];

function findStudentByFirstName(name){
    for(let i = 0; i < students.length; i++){
        if(students[i].firstName.toLowerCase() === name.toLowerCase()){
            return true;
        }
    }
    return false;
}

function extractEveryThird(array){
    let arr = [];
    for(let i = 2; i < array.length; i+=3){
        arr.push(array[i]);
    }
    return arr;
}

function countEvenAndOdds(array){
    let odd = 0;
    let even = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] != 0){
            if(array[i] % 2 == 0){
                even++;
            }else{
                odd++;
            }
        }
    }
    return {
        oddCount : odd,
        evenCount : even
    }
}

function onlyCapitalLetters(string){
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toUpperCase()){
            newString += string[i];
        }
    }
    // for(var i = 0; i < str.length; i++){
    //     if(str[i].charCodeAt(0) < 91 && str[i].charCodeAt(0) > 64 ){
    //         newStr += str[i];
    //     }    
    // }
    return newString;
}

let student = {
    name : 'Petr',
    lastName : 'Grozniy'
}
student.name = 'Petya'
delete student.name
let group = [];
group.push(student)

let student2 = {
    name : 'Ivan',
    lastName : 'Ivanov'
}

let student3 = {
    name : 'Fedor',
    lastName : 'Fedorov'
}


group.push(student2, student3)

console.log(student, student2, student3);
console.log(group);
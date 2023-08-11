"use strict";
function findEmployeeInfo(employees, targetName) {
    const employee = employees.find(emp => emp.name === targetName);
    if (employee) {
        return `ชื่อ ${employee.name} ตําแหน่ง ${employee.position}`;
    }
    else {
        return `Employee with name ${targetName} not found.`;
    }
}
const employees = [
    { name: 'Arm', position: 'Front End' },
    { name: 'Game', position: 'Back End' }
];
const jannyInfo = findEmployeeInfo(employees, 'Janny');
const gameInfo = findEmployeeInfo(employees, 'Game');
console.log(jannyInfo);
console.log(gameInfo);

// @ts-ignore
import * as theStudent from './student.json';

interface IStudent {
    name: string
    semester: number
    completedCourses: string[]
    gpa: number
}

let studentJson: IStudent = theStudent

console.log(studentJson)
console.log(studentJson.name)
console.log(studentJson.semester)
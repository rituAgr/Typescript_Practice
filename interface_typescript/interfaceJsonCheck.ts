// @ts-ignore
import * as theStudent from './student.json';

interface IStudent {
    name: string
    semester: number
    completedCourses: string[]
    gpa: number
}

let studentJson: any = theStudent

console.log(studentJson)
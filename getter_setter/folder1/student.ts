export class Student{
    name: string
    sem: string
    course: string

    constructor(name, sem, course) {
        this.name = name
        this.sem = sem
        this.course = course
    }

    public set nameSetter(theName: string){
        this.name=theName
    }

    public get nameGetter(){
        return this.name
    }
}
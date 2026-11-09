const multiplyValue = (value: number, multiplier?: number) => {
    if (multiplier === undefined) {
        return value * 2
    }
    return value * multiplier

}

type Value = string | number | boolean
const processInput = (value: Value) => {
    if (typeof value === 'string') {

        return value.toLowerCase().trim()
    }
    if (typeof value === 'number') {
        return value * 10
    }
    if (value === true) {
        return "Active"
    }
    else {
        return "Inactive"
    }

}

type Address = readonly [number, number, string]
const formatCoordinate = (x: Address) => {
    const [latitude, longitude, locationName] = x
    return `Location: ${locationName} (${latitude}, ${longitude})`
}

const concatenateArrays = <T>(...arrays: T[][]) => {
    const values = []

    for (const array of arrays) {
        for (const item of array) {
            values.push(item)
        }
    }
    return values
}



interface Course {
    title: string
    students: number
    isPublished: boolean
}



const course: Course[] = [
    {
        title: "Ielts",
        students: 6,
        isPublished: true
    },
    {
        title: "Web Development",
        students: 2,
        isPublished: true
    },

    {
        title: "Graphics Designer",
        students: 9,
        isPublished: false
    },
    {
        title: "Web Development",
        students: 12,
        isPublished: true
    }

]

const getPopularCourses = (courses: Course[], minStudents: number) => {
    const popularCourses = []
    for (const c of courses) {
        if (c.isPublished === true && c.students >= minStudents) {
            popularCourses.push(c)
        }
    }
    return popularCourses
}

const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
    const result = []

    for (const item of items) {
        result.push(item[key])
    }

    return result
}


class Employee {
    constructor(protected name: string, private baseSalary: number) { }

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary)
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`
    }
}

const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000)
        } else {
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    })
}









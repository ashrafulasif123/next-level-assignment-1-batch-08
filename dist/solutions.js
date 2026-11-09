const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
};
const processInput = (value) => {
    if (typeof value === 'string') {
        return value.toLowerCase().trim();
    }
    if (typeof value === 'number') {
        return value * 10;
    }
    if (value === true) {
        return "Active";
    }
    else {
        return "Inactive";
    }
};
const formatCoordinate = (x) => {
    const [latitude, longitude, locationName] = x;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    const values = [];
    for (const array of arrays) {
        for (const item of array) {
            values.push(item);
        }
    }
    return values;
};
const course = [
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
];
const getPopularCourses = (courses, minStudents) => {
    const popularCourses = [];
    for (const c of courses) {
        if (c.isPublished === true && c.students >= minStudents) {
            popularCourses.push(c);
        }
    }
    return popularCourses;
};
const pluckValues = (items, key) => {
    const result = [];
    for (const item of items) {
        result.push(item[key]);
    }
    return result;
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
export {};

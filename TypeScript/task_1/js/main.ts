/* =========================
   TASK 1 — Teacher Interface
   ========================= */

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;

  fullTimeEmployee: boolean;

  yearsOfExperience?: number;

  location: string;

  [key: string]: any;
}


/* =========================
   TASK 1 — Test Teacher
   ========================= */

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',

  fullTimeEmployee: false,

  location: 'London',

  contract: false,
};

console.log(teacher3);


/* =========================
   TASK 2 — Extend Teacher
   Create Directors interface
   ========================= */

interface Directors extends Teacher {
  numberOfReports: number;
}


/* =========================
   TASK 2 — Test Directors
   ========================= */

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',

  location: 'London',

  fullTimeEmployee: true,

  numberOfReports: 17,
};

console.log(director1);


/* =========================
   TASK 3 — Function Interface
   printTeacherFunction
   ========================= */

interface printTeacherFunction {
  (
    firstName: string,
    lastName: string
  ): string;
}


/* =========================
   TASK 3 — printTeacher
   ========================= */

const printTeacher: printTeacherFunction = (
  firstName,
  lastName
): string => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(
  printTeacher(
    'John',
    'Doe'
  )
);


/* =========================
   TASK 4 — Constructor Interface
   ========================= */

interface StudentConstructor {
  new (
    firstName: string,
    lastName: string
  ): StudentClassInterface;
}


/* =========================
   TASK 4 — Student Interface
   ========================= */

interface StudentClassInterface {
  workOnHomework(): string;

  displayName(): string;
}


/* =========================
   TASK 4 — StudentClass
   ========================= */

class StudentClass
implements StudentClassInterface {

  constructor(
    private firstName: string,
    private lastName: string
  ) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}


/* =========================
   TASK 4 — Test StudentClass
   ========================= */

const student = new StudentClass(
  'John',
  'Doe'
);

console.log(
  student.workOnHomework()
);

console.log(
  student.displayName()
);

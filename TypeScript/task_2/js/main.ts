/* =========================
   TASK 5 — Advances types part 1
   ========================= */

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(
  salary: number | string
): Director | Teacher {
  if (
    typeof salary === 'number'
    && salary < 500
  ) {
    return new Teacher();
  }

  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

/* =========================
   TASK 6 — Type Predicate
   isDirector
   ========================= */

function isDirector(
  employee: Director | Teacher
): employee is Director {
  return employee instanceof Director;
}


/* =========================
   TASK 6 — executeWork
   ========================= */

function executeWork(
  employee: Director | Teacher
): string {

  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }

  return employee.workTeacherTasks();
}


/* =========================
   TASK 6 — Tests
   ========================= */

console.log(
  executeWork(
    createEmployee(200)
  )
);

console.log(
  executeWork(
    createEmployee(1000)
  )
);

/* =========================
   TASK 7 — String Literal Type
   Subjects
   ========================= */

type Subjects =
  | 'Math'
  | 'History';


/* =========================
   TASK 7 — teachClass
   ========================= */

function teachClass(
  todayClass: Subjects
): string {

  if (todayClass === 'Math') {
    return 'Teaching Math';
  }

  return 'Teaching History';
}


/* =========================
   TASK 7 — Tests
   ========================= */

console.log(
  teachClass('Math')
);

console.log(
  teachClass('History')
);

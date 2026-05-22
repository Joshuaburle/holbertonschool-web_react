interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Paris"
};

const student2: Student = {
  firstName: "Emma",
  lastName: "Smith",
  age: 21,
  location: "London"
};

const studentsList: Student[] = [
  student1,
  student2
];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell =
    document.createElement('td');

  const locationCell =
    document.createElement('td');

  firstNameCell.textContent =
    student.firstName;

  locationCell.textContent =
    student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);

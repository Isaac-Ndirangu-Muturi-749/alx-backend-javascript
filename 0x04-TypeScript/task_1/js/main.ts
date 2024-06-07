// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow adding any additional attributes
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  // Extract the first letter of the firstName
  const firstLetter = firstName.charAt(0);
  // Combine the first letter of firstName and the full lastName
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};


// Define an interface for the constructor of the StudentClass
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define an interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class Student implements StudentClass {
  // Properties
  firstName: string;
  lastName: string;

  // Constructor
  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to work on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to display the first name of the student
  displayName(): string {
    return this.firstName;
  }
}

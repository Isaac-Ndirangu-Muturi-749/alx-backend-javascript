// interface.ts

// Create a type RowID and set it equal to number
type RowID = number;

// Create an interface RowElement
interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}

export { RowID, RowElement };

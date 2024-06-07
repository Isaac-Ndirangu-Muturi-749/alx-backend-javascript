// Define the CRUD operations

export function insertRow(row: any): void {
  console.log('Row inserted', row);
}

export function updateRow(rowId: number, row: any): void {
  console.log(`Row ${rowId} updated`, row);
}

export function deleteRow(rowId: number): void {
  console.log(`Row ${rowId} deleted`);
}

// crud.d.ts

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Declare type declarations for each CRUD function
declare module CRUD {
    function insertRow(row: RowElement): RowID;
    function deleteRow(rowId: RowID): void;
    function updateRow(rowId: RowID, row: RowElement): RowID;
}

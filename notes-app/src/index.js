import { getNotes, createNotes, removeNote, updateNote } from "./notes"
import { getFilters, setFilters } from "./filters"

// console.log(getNotes())
//createNotes()
//removeNote("82f1c30c-2b22-4543-a8ef-f0ada12c782e")
// updateNote("12a562dc-29fe-4d71-be87-63d2c8674ffb", { title: "My new title" })
// console.log(getNotes())

console.log(getFilters())
setFilters({ searchText: "Office", sortBy: "byCreated" })
console.log(getFilters())

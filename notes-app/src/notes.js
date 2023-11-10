import { v4 as uuidv4 } from "uuid"
import moment from "moment"

let notes = []

// Read existing notes from localStorage
const loadNotes = function () {
  const notesJSON = localStorage.getItem("notes")

  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}

// Save the notes to localStorage
const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes))
}

// Expose notes from module
const getNotes = () => notes

const createNotes = () => {
  const id = uuidv4()
  const timestamp = moment().valueOf()
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  })
  saveNotes()
}
notes = loadNotes()

export { getNotes, createNotes }

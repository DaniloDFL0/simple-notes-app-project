import NotesList from "./components/NotesList"
import { nanoid } from "nanoid"
import { useState } from "react"

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "12/05/2023"
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "12/05/2023"
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "12/05/2023"
    },
    {
      id: nanoid(),
      text: "this is my new note",
      date: "12/09/2023"
    }
  ])

  const addNote = (text) => {
    const date = new Date()

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]

    setNotes(newNotes)
  }

  return (
    <div className="max-w-[100rem] mx-auto px-6">
      <NotesList notes={notes} addNote={addNote}/>
    </div>
  )
}

export default App

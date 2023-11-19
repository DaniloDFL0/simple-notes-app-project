import NotesList from "./components/NotesList"
import SearchNotes from "./components/SearchNotes"
import Header from "./components/Header"
import { nanoid } from "nanoid"
import { useState, useEffect } from "react"

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  // adding note
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

  // deleting note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => id !== note.id)

    setNotes(newNotes)
  }

  const [searchNotes, setSearchNotes] = useState("")

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="max-w-[100rem] mx-auto px-6">
      <Header toggleTheme={toggleTheme}/>
      <SearchNotes searchNotes={searchNotes} setSearchNotes={setSearchNotes}/>
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchNotes.toLowerCase()))} 
        addNote={addNote} 
        deleteNote={deleteNote}
      />
    </div>
  )
}

export default App

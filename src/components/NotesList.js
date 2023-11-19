import Note from "./Note"
import AddNote from "./AddNote"

const NotesList = ({ notes, addNote, deleteNote }) => {
  return (
    <div className="grid gap-6 grid-cols-1 max-sm:justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {notes.map((note) => (
            <Note 
              key={note.id} 
              {...note} 
              deleteNote={deleteNote}
            />
        ))}
        <AddNote addNote={addNote}/>
    </div>
  )
}

export default NotesList
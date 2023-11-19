import { useState } from "react"

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState("")

  const handleSaveClick = () => {
    if(noteText.trim().length > 0) {
        addNote(noteText)
        setNoteText("")
    }
  }

  const maxCharacters = 200
  const remainingCharacters = maxCharacters - noteText.length

  return (
    <div className="max-w-sm bg-teal-400 dark:bg-fuchsia-900 py-3 px-5 rounded-lg min-h-[200px] flex flex-col justify-between dark:text-white">
        <textarea 
            autoFocus
            cols="10" 
            rows="6" 
            placeholder="Type to add a note..." 
            className="border-none resize-none bg-teal-400 dark:bg-fuchsia-900 focus:outline-none text-lg font-roboto"
            value={noteText}
            onChange={(e) => {
                if(maxCharacters - e.target.value.length >= 0) {
                    setNoteText(e.target.value)
                }
            }}
            
        >
        </textarea>
        <div className="flex justify-between items-center mt-2">
            <div className="text-[18px] font-roboto tracking-normal leading-normal">{remainingCharacters} Remaining</div>
            <button className="py-2 px-4 rounded-full bg-slate-200 font-roboto text-md dark:text-black" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote
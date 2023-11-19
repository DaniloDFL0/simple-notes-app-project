import { FaSearch } from "react-icons/fa"

const SearchNotes = ({ searchNotes, setSearchNotes }) => {

  return (
    <div className="flex items-center relative mb-10">
        <input 
            type="text"
            placeholder="Search notes..."
            className="border border-slate-300 py-2 px-4 rounded-full w-full cursor-pointer font-roboto tracking-wide font-normal focus:outline-none focus:border-slate-500 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:focus:outline-none dark:focus:border-slate-600"
            value={searchNotes}
            onChange={(e) => setSearchNotes(e.target.value)}
        />
        <FaSearch className="text-2xl text-slate-600 absolute right-4 cursor-pointer"/>
    </div>
  )
}

export default SearchNotes
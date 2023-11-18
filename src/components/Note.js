import { FaTrashAlt } from "react-icons/fa"

const Note = ({ text, date }) => {
    return (
      <div className="max-w-sm bg-yellow-200 py-3 px-5 rounded-lg min-h-[210px] flex flex-col justify-between">
          <div className="text-xl font-medium font-roboto break-words whitespace-pre-wrap">{text}</div>
          <div className="flex justify-between">
              <div className="font-medium font-roboto tracking-wide text-lg">{date}</div>
              <FaTrashAlt className="text-xl cursor-pointer hover:text-red-600 ease-in-out duration-200"/>
          </div>
      </div>
    )
  }

export default Note
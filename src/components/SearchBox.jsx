import React, { useState, useContext } from "react";
import GithubContext from "../context/Github/GithubContext";
import AlertContext from "../context/Alert/AlertContext";
const SearchBox = () => {
  const [text, setText] = useState("");
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleSubmit = () => {
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <>
      {users.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={clearUsers}
            className="btn btn-error btn-sm md:btn-lg mb-7 "
          >
            Clear All
          </button>
        </div>
      )}
      <div className="flex justify-center">
        <div className="relative">
          <input
            type="text"
            className="w-full pr-40 bg-gray-200 input input-lg text-black"
            placeholder="Search for a user"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="absolute top-0 right-0 rounded-l-none  w-24 btn btn-active btn-accent btn-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Go
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;

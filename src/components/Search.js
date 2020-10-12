import React from "react";

const Search = ({ inputVal, setInputVal }) => {
  return (
    <form>
      <input 
        type="text"
        placeholder="Searching for an image"
        autoFocusvalue={inputVal}
        onChabge={(e) => setInputVal(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
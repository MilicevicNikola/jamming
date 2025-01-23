import React, {useState, useEffect, useCallback} from "react";

function SearchBar(props){
    const [searchTerm, setSearchTerm] = useState("");
    function handleChange(event){
        setSearchTerm(event.target.value);
    }
    function search(){
        props.onSearch(searchTerm);
    }
    return(
        <div>
            <input onChange={handleChange} placeholder="Enter search..."></input>
            <button onClick={search}>SEARCH</button>
        </div>
    );
}


export default SearchBar;
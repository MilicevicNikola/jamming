import React, {useState, useEffect, useCallback} from "react";
import Tracklist from "../Tracklist/tracklist.js";

function SearchResults(props){
    return(
        <div><Tracklist tracks={props.searchResults}  addOrRemove={props.addSong} buttonName="Add Song"/></div>
    );
}



export default SearchResults;
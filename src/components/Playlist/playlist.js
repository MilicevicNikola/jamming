import React, {useState, useEffect, useCallback} from "react";
import Tracklist from "../Tracklist/tracklist.js";

function Playlist(props){
    const [playlistName, setPlaylistName] = useState("Your Playlist");
    function changePlaylistName(event){
        setPlaylistName(event.target.value);
    }
    return(
        <div>
            <input onChange={changePlaylistName} value={playlistName} />
            <Tracklist tracks={props.myPlaylist} buttonName="Remove Song" addOrRemove={props.removeSong}/>
            <button onClick={props.savePlaylist}>Save To Spotify</button>
        </div>
    );
}



export default Playlist;
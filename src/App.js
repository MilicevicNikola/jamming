import React, {useState, useCallback, useEffect} from "react";
import SearchBar from "./components/SearchBar/searchBar.js";
import Playlist from "./components/Playlist/playlist.js";
import SearchResults from "./components/SearchResults/searchResults.js";
import Spotify from "./spotify/spotify.js";
import "./App.css";


function App() {
  const [myPlaylist, setMyPlaylist] = useState([]);
  const [searchResults, setSearchResults] = useState([{
    name: "name 1",
    artist: "artist 1",
    album: "album 1",
    id: 1
  },{
    name: "name 2",
    artist: "artist 2",
    album: "album 2",
    id: 2
  }]);
  function addSong(track){
    if(myPlaylist.some((song) => song.id === track.id)){
      return;
    }
    setMyPlaylist((prev) => [...prev, track]);
  }
  function removeSong(track){
      setMyPlaylist((songs) => 
        songs.filter(tracks => tracks.id !== track.id)
      )
  }
  function search(term){
    Spotify.search(term).then(setSearchResults);
  }
  function savePlaylist(){
    const playlistTracks = myPlaylist.map((track) => track.uri);
    Spotify.savePlaylist(myPlaylist, playlistTracks).then(() => 
    setMyPlaylist([]));
  }
  
  return (
    <div>
      <div className="searchResults">
      <SearchResults searchResults={searchResults} addSong={addSong}/>
      <SearchBar  onSearch={search}/>
      </div>
      <div className="playlist">
      <Playlist
      savePlaylist={savePlaylist} 
      searchResults={searchResults} 
      myPlaylist={myPlaylist} 
      removeSong={removeSong}/>
      </div>
    </div>
  );
}

export default App;

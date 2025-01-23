import React, {useEffect, useState, useCallback} from "react";
import Track from "../Track/track.js";

function Tracklist(props){
    return(
        <div>
            {props.tracks.map((track) =>  
                <Track key={track.id} track={track} click={props.addOrRemove} buttonValue={props.buttonName}/>
            )}
        </div>
    );
}


export default Tracklist;
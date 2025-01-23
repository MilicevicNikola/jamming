import React, {useState, useEffect, useCallback} from "react";
import "./track.css";

function Track(props){
    return (
        <div>
            <h1>{props.track.name}</h1>
            <h3>{props.track.artist}</h3>
            <h3>{props.track.album}</h3>
            <button onClick={() => props.click(props.track)}>{props.buttonValue}</button>
            <hr />
        </div>
    );
}



export default Track;
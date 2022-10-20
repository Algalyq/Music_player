
import APIService from '../APIService'
import React, { useState, useEffect } from "react";
function Main (props) {

        const [music,setSongs] = useState([])

        const player = (song) => {
           APIService.PlayerSong(song.song_file)
           .then(() => props.player(song))
           .catch(error => console.log(error))
        }
        
        return( 
        <div>
                {props.songs && props.songs.map(song => {
                        return (
                        <div>
                        <h2>{song.name}</h2>
                        <audio controls>
                            <source src={'http://127.0.0.1:8000/'+ song.song_file + '/' } audio='media/mp3' />        
                        </audio>          
                        </div>
                        )
                })} 
        </div>
        );
}
export default Main;
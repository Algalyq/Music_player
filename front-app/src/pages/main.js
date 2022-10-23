
import APIService from '../APIService'
import React, { useState, useEffect, Component } from "react";
class Main extends Component {

        // const [music,setSongs] = useState([])
     
        // const player = (song) => {
        //    APIService.PlayerSong(song)
        //    .then(() => props.player(song))
        //    .catch(error => console.log(error))
        // }
        state = {
                credentials: {username: '', password: ''},
                logged_in: false,
              
              }
        logout = event => {
                fetch('http://127.0.0.1:8000/api/auth/logout', {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(this.state.credentials)
                })
                .then( data => data.json())
                .then(
                  data => {
                    console.log(data.token);
                
                  }
                )
                .catch( error => console.error(error))
              }
              render() {
        return( 
        <div>
                <h2>dfg</h2>
                <button onClick={this.logout}>Logout</button>
                {/* {props.songs && props.songs.map(song => {
                        return (
                        <div>
                        <h2>{song.name}</h2>
                        <audio controls>
                            <source src={"http://127.0.0.1:8000/"+  song.song_file + " /"}  audio='media/mp3' />        
                        </audio> 
                                  
                        </div>
                        )
                })}  */}
        </div>
        );
}
}
export default Main;
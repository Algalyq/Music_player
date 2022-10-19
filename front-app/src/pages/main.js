import React from 'react'

function Main (props) {
        return( 
        <div>
                {props.songs && props.songs.map(song => {
                        return (
                                <div>
                                        <audio controls name="media" >
                                        <source src="{song.song_file}" type='audio/mpeg'/>
                                        </audio>
                                </div>
                        )
                })} 
        </div>
        );
}
export default Main;
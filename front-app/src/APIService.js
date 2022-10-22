    
export default class APIService {
    
    
static PlayerSong(song){
        return fetch(`http://127.0.0.1:8000/${song.song_file}/`,{
            'method': 'GET',
            headers: {
                'Content-Type':'application/json',
              },
              
        }).then(resp => resp.json())
        
}


   

 

}
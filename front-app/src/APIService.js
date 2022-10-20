    
export default class APIService {
    
    
    static PlayerSong(song_file, body){
        return fetch(`http://127.0.0.1:8000/media/${song_file}/`,{
            'method': 'GET',
            headers: {
                'Content-Type':'application/json',
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())
    }


   

 

}
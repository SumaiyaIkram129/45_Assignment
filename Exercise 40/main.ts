function make_album(artist_name: string, album_title: string, trackes?:){
    let album: {artist: string, title: string, trackes?: number} = {
        artist: artist_name,
        title: album_title,
    };
    if(trackes !== undefined){
        album.trackes = trackes
    }
    return album;
}

let album1 = make_album("Sumaiya", "album title 1")
let album2 = make_album("Asma", "album title 2")
let album3 = make_album("Sania", "album title 3" 20)
console.log(album1);
console.log(album2);
console.log(album3);

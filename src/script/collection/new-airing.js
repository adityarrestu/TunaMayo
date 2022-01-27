import albums from './albums.js';

let newAiring = albums.filter(album => {
    return album.statusAlbum === "Baru Tayang";
})

export default newAiring;
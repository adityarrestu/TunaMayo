import albums from './albums.js';

let featuredAlbums = albums.filter(album => {
    return album.statusAlbum === "Baru Tayang";
})

export default featuredAlbums;
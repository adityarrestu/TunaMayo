import albums from './albums.js';

let featuredAlbums = albums.filter(album => {
    return album.featuredAlbum === "true";
})

export default featuredAlbums;
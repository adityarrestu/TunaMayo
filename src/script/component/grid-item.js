class GridItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set album(album) {
        this._album = album;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    width: 180px;
                    margin: 5px;
                    opacity: 0;
                    transition: 300ms ease-in;
                }
                
                :host(.show) {
                    opacity: 1;
                }

                .album-wrap {
                    display: flex;
                    width: 180px;
                    height: 260px;
                    background: url("${this._album.poster}") no-repeat center;
                    background-size: cover;
                    border-radius: 10px;
                    align-items: flex-end;
                }
                
                .album-wrap > img {
                    max-width: 250px;
                    object-fit: cover;
                }
                
                .episode {
                    margin: 0;
                    padding: 5px 0px 5px 10px;
                    width: 100%;
                    font-size: 13px;
                    color: #ffffff;
                    box-shadow: 0px -15px 12px rgba(17, 19, 25, .5) inset;
                    border-radius: 0px 0px 10px 10px;
                }

                .title {
                    max-width: 180px;   
                    max-height: 40px; 
                    margin: 10px 0 5px 0;
                    color: #8A8A8D;
                    font-size: 16px;
                    overflow: hidden;
                }
            </style>

            <div class="album-wrap">
                <p class="episode">${this._album.statusAlbum}</p>
            </div>
            <p class="title">${this._album.title}</p>
        `;
    }
}

customElements.define("grid-item", GridItem);
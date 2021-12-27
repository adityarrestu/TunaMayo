import './grid-item.js';

class GridContent extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set albums(albums) {
        this._albums = albums;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                    font-family: Roboto, sans serif;
                }

                :host {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    padding: 20px 0;
                    justify-content: center;
                    align-items: center;
                }
                
                .grid-wrap {
                    min-width: 86%;
                    height: 100%;
                    margin: 0 5% 0 5%;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(190px, 0.8fr));
                    grid-gap: 5px 10px;
                    justify-content: space-between;
                }
            </style>

            <section class="grid-wrap">
            </section>
        `;
        
        const gridAlbum = this.shadowDOM.querySelector(".grid-wrap")
        this._albums.forEach(album => {
            const gridItem = document.createElement("grid-item");
            gridItem.album = album;
            gridAlbum.appendChild(gridItem);
        })

    }
}

customElements.define('grid-content', GridContent);
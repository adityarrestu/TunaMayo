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
                    padding: 20px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                
                .grid-wrap {
                    min-width: 86%;
                    height: 95vh;
                    margin: 0 5% 0 5%;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(190px, 0.8fr));
                    grid-gap: 5px 10px;
                    justify-content: space-between;
                    overflow: hidden;
                    box-shadow: 0px -20px 12px rgba(17, 19, 25, .5) inset;
                    transition: 300ms ease-in;
                    animation: fadein 300ms ease-in;
                }

                .grid-wrap.expand {
                    height: 100%;
                }
                
                .not-found {
                    display: none;
                    width: 80%;
                    height: 80vh;
                    padding: 20px;
                    font-size: 1rem;
                    text-align: center;
                    color: rgba(255, 255, 255, .8);
                    animation: fadein 300ms ease-in;
                }

                @keyframes fadein {
                    0% {opacity: 0%;}
                    100% {opacity: 100%;}
                }

                .more {
                    margin: 20px;
                    padding: 10px;
                    background: #3E96DB;
                    border: none;
                    border-radius: 10px;
                    font-size: 15px;
                    color: #ffffff;
                    cursor: pointer;
                    transition: 300ms ease-in;
                }

                .more.hidden {
                    display: none;
                }
            </style>
            
            <section class="not-found">Album tidak ditemukan</section>
            <section class="grid-wrap"></section>
            <button class="more">Lebih banyak</button>
        `;

        const gridAlbum = this.shadowDOM.querySelector(".grid-wrap");
        const notFound = this.shadowDOM.querySelector(".not-found");

        if (this._albums.length === 0) {
            gridAlbum.style.display = "none";
            notFound.style.display = "inline";

        } else {
            this._albums.forEach(album => {
                const gridItem = document.createElement("grid-item");
                gridItem.album = album;
                gridAlbum.appendChild(gridItem);
            })
        }

        const gridItem = this.shadowDOM.querySelectorAll("grid-item");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting); 
                if (entry.isIntersecting) observer.unobserve(entry.target); // berhenti observe
            })
            console.log(entries);
        }, {
            // threshold: 1,
            rootMargin: "100px",
        })

        gridItem.forEach(item => {
            observer.observe(item);
        })

        const moreButton = this.shadowDOM.querySelector(".more");
        moreButton.addEventListener("click", () => {
            gridAlbum.classList.add("expand");
            moreButton.classList.add("hidden");
        })

    }
}

customElements.define('grid-content', GridContent);
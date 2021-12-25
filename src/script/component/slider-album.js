import albums from './albums.js';
import './slider-item.js'

class SliderAlbum extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM =  this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    set albums(albums) {
        this._albums = albums;
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0px;
                padding: 0px;
                box-sizing: border-box;
            }

            :host {
                margin-top: 50px;
                width: 100%;
                height: 728px;
                overflow: hidden;
            }

            .shadow {
                z-index: 3;
                position: absolute;
                height: 728px;
                top: 0px;
                right: 0px;
                left: 0px;
                margin-top: 60px;
            }

            .shadow-left {
                position: absolute;
                z-index: 3;
                width: 60%;
                height: 100%;
                background: linear-gradient(270deg, rgba(17, 19, 25, 0) 53.62%, #111319 100%);
            }

            .shadow-bottom {
                position: absolute;
                z-index: 4;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, rgba(17, 19, 25, 0) 59.92%, #111319 100.74%);
            }

            .round {
                z-index: 7;
                position: absolute;
                width: 58px;
                height: 58px;
                top: 450px;
                border: none;
                border-radius: 50%;
                cursor: pointer;
            }

            .play {
                left: 120px;
                background: #3E96DB;
            }

            .plus {
                left: 200px;
                background: #ffffff;
            }

            /* simbol arrow */
            .arrow {
                z-index: 7;
                position: absolute;
                width: 30px;
                height: 30px;
                border-top: 6px solid #555659;
                border-left: 6px solid #555659;
                border-radius: 5px;
                top: 300px;
                cursor: pointer;
            }

            .arrow:hover {
                border-top: 6px solid #ffffff;
                border-left: 6px solid #ffffff;
            }

            .left {
                left: 3%;
                transform: rotate(-45deg);
            }

            .right {
                right: 3%;
                transform: rotate(135deg);
            }

            .nav-icon {
                z-index: 7;
                position: absolute;
                display: flex;
                top: 550px;
                left: 120px;
                justify-content: space-between;
                align-items: center;
            }

            .slide-icon {
                z-index: inherit;
                width: 10px;
                height: 10px;
                margin: 0px 5px;
                background: #555659;
            }

            .slide-icon.active {
                width: 18px;
                background: #3E96DB;
            }
        </style>

        <div class="shadow">
            <div class="shadow-left"></div>
            <div class="shadow-bottom"></div>
        </div>

        <div class="nav-icon">
            <div class="slide-icon"></div>
            <div class="slide-icon"></div>
            <div class="slide-icon"></div>
            <div class="slide-icon"></div>
            <div class="slide-icon"></div>
            <div class="slide-icon"></div>
        </div>

        <div class="arrow left"></div>
        <div class="arrow right"></div>

        <button class="round play"></button>
        <button class="round plus"></button>
        `;


        this._albums.forEach(album => {
            const albumItemElement = document.createElement("album-item");
            albumItemElement.album = album;
            this._shadowDOM.appendChild(albumItemElement);
        });
        
        // let i = 0;
        // const albumItemElement = document.createElement("album-item");

        // const addSlide = albums => {
        //     albumItemElement.album = albums[i];
        //     this._shadowDOM.appendChild(albumItemElement);
        // }

        // for (i = 0; i < albums.length; i++) {
        //     if (i < albums.length) {
        //         setTimeout(() => {
        //             this._shadowDOM.removeChild(albumItemElement);
        //             addSlide(albums);
        //         }, 5000);
        //     } else {
        //         i = 0;
        //     }
        // }

    };


}

customElements.define("slider-album", SliderAlbum);
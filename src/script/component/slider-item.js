import './tag-item.js';

class SliderItem extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM =  this.attachShadow({mode: "open"});      
    }

    connectedCallback() {
        this.render();
    }

    set album(album) {
        this._album = album;
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = `
        <style>
            .slider-banner {
                position: relative;
                width: 100%;
                height: 728px;
            }
            
            .slide {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            
            .slide .frame {
                opacity: 0%;
                transition: opacity 350ms linear;
                transition-delay: 800ms;
            }
            
            .slide.active .frame {
                z-index: 5;
                opacity: 100%;
            }
            
            .slide.next-slide .frame {
                z-index: 4;
                opacity: 100%;
                transition: opacity 1000ms ease-out;
            }
            
            .slide .background-banner {
                position: absolute;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position-y: 25%;
                overflow: hidden;
            }
            
            .slide .poster-banner {
                z-index: 7;
                position: absolute;
                width: 514px;
                height: 100%;
                top: 0px;
                background-size: cover;
                opacity: 0%;
                animation: moveout 1600ms ease-in forwards;
            }
            
            /* .slide.active .poster-banner {
                animation: move-in 500ms ease-in-out forwards;
                animation-delay: 500ms;
            } */
            
            @keyframes movein {
                0% {opacity: 0%; right: -540px;}
                100% {opacity: 100%; right: 90px;}
            }
            
            @keyframes moveout {
                0% {opacity: 100%; right: 90px;}
                25% {opacity: 100%; right: 120px;}
                60% {opacity: 0%; right: 400px;}
                100% {opacity: 0%; right: 400px;}
            }
            
            .info {
                z-index: 7;
                position: absolute;
                width: 624px;
                height: auto;
                top: 120px;
                left: 120px;
                cursor: default;
            }
            
            .title-img {
                max-height: 100px;
                margin: 20px 0px;
            }
            
            .rate-year {
                display: flex;
                width: 100%;
                height: 21px;
            }
            
            p {
                margin: 0px 4px;
                color: #FFFFFF;
            }
            
            .rating {
                color: #3E96DB;
            }
            
            .description {
                width: 624px;
                margin: 8px 0px;
            }
            
            .tag-list {
                margin: 10px 0px;
                display: flex;
                width: 624px;
                overflow: hidden;
            }
        </style>
        
        <img class="poster" src="${this._album.poster}">
            
        <div class="frame">

            <img class="background-banner" src="${this._album.background}" alt="">

            <div class="info">

                <img class="title-img" src="${this._album.titleImg}">

                <div class="rate-year">
                    <img src="" alt="" width="17px" height="17px">
                    <p class="rating">${this._album.rate} |</p>
                    <p class="year">${this._album.year}</p>
                </div>
                
                <div class="tag-list">
                </div>
                    
                <p class="description">${this._album.description}</p>

            </div>

        </div>
        `;

        // this._albums.tag.forEach(() => {
        //     const tagItemElement = document.createElement("tag-item");

        //     this._shadowDOM.appendChild(tagItemElement); 
        // });
    }

}

customElements.define("slider-item", SliderItem);
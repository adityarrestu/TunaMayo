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
                    cursor: pointer;
                }
                
                :host(.show) {
                    opacity: 1;
                }

                .album-wrap {
                    display: flex;
                    width: 180px;
                    height: 260px;
                    background: url("${this._album.frontPoster}") no-repeat center;
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
                    max-height: 30px; 
                    margin: 10px 0 5px 0;
                    color: #8A8A8D;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                @media (min-width: 985px) and (max-width: 1270px) {
                    .album-wrap {
                        width: 160px;
                        height: 240px;
                    }
                }

                @media (min-width: 768px) and (max-width: 984px) {
                    .album-wrap {
                        width: 160px;
                        height: 210px;
                    }
                }

                @media (min-width: 320px) and (max-width: 767px) {
                    .album-wrap {
                        border-radius: 5px;
                    }

                    .title {
                        font-size: 10px;
                        max-height: 24px;
                        margin: 2px 0;
                    }
                    
                    .episode {
                        font-size: 8px;
                        padding: 0 0 2px 4px;
                        box-shadow: 0px -5px 7px rgba(17, 19, 25, .5) inset;
                    }
                }

                @media (min-width: 421px) and (max-width: 767px) {
                    :host {
                        width: 90px;
                        height: 165px;
                    }

                    .album-wrap {
                        width: 90px;
                        height: 140px;
                    }
                }

                @media (min-width: 371px) and (max-width: 420px) {
                    :host {
                        width: 110px;
                        height: 185px;
                    }

                    .album-wrap {
                        width: 110px;
                        height: 160px;
                    }
                }
     
                @media (min-width: 320px) and (max-width: 370px) {
                    :host {
                        width: 90px;
                        height: 165px;
                    }

                    .album-wrap {
                        width: 90px;
                        height: 140px;
                    }
                }
            </style>

            <div class="album-wrap">
                <p class="episode">${this._album.episode}</p>
            </div>
            <p class="title">${this._album.title}</p>
        `;
    }
}

customElements.define("grid-item", GridItem);
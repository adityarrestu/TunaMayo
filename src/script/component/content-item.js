class ContentItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set album(album) {
        this._album = album;
    }

    render() {  
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    min-width: 275px;
                    margin: 10px;
                    cursor: pointer;
                }

                .content-wrap {
                    display: flex;
                    width: 100%;
                    height: 150px;
                    background: url("${this._album.banner}") no-repeat center;
                    background-size: cover;
                    border-radius: 10px;
                    align-items: flex-end;
                }
                
                .content-wrap > img {
                    object-fit: cover;
                }

                .episode {
                    z-index: 1;
                    margin: 0;
                    padding: 5px 0px 5px 10px;
                    width: 100%;
                    font-size: 13px;
                    font-weight: 500;
                    color: #ffffff;
                    box-shadow: 0px -15px 12px rgba(17, 19, 25, .5) inset;
                    border-radius: 0px 0px 10px 10px;
                }

                .title {
                    max-width: 275px;  
                    max-height: 26px; 
                    margin: 10px 0px;
                    color: #8A8A8D;
                    font-size: 16px;
                    text-overflow: ellipsis;
                }

                @media (min-width: 320px) and (max-width: 767px) {
                    :host {
                        min-width: 150px;
                        margin: 3px;
                    }

                    .content-wrap {
                        height: 80px;
                        border-radius: 4px;
                    }

                    .title {
                        max-height: 20px;
                        margin: 5px;
                        font-size: 10px;
                    }

                    .episode {
                        font-size: 8px;
                        padding: 2px 0;
                        box-shadow: 0px -5px 8px rgba(17, 19, 25, .5) inset;
                    }
                }
            </style>

            <div class="content-wrap">
                <p class="episode">${this._album.episode}</p>
            </div>
            <p class="title">${this._album.title}</p>
        `;
    }

}

customElements.define('content-item', ContentItem);
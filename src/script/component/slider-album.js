class SliderAlbum extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM =  this.attachShadow({mode: "open"});      
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = `
        <div class="banner">
            <div class="shadow-banner">
                <div class="shadow-left"></div>
                <div class="shadow-bottom"></div>
            </div>
            <div class="slider-banner">
                <div class="slide active">
                    
                </div>
                
                <div class="nav-icon">
                    <div class="slide-icon active"></div>
                    <div class="slide-icon"></div>
                    <div class="slide-icon"></div>
                    <div class="slide-icon"></div>
                    <div class="slide-icon"></div>
                </div>
                <div class="nav-banner">
                    <div class="arrow left"></div>
                    <div class="arrow right"></div>
                </div>
            </div>
            <a href="">
                <button class="round play"></button>
            </a>
            <a href="">
                <button class="round plus"></button>
            </a>
        </div>
        `;
    }
}

customElements.define("slider-album", SliderAlbum);
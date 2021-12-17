class AlbumSlider extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM =  this.attachShadow({mode: "open"});      
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = `
        <img class="poster-banner" src="/aset/img/takt-op.Destiny-Visual.jpg">
            
        <div class="frame">
        <img class="background-banner" src="/aset/img/Takt-op.Destiny.BasicBackground.webp" alt="">
            <div class="description-banner">
                 <div class="title-banner"></div>
                <div class="rate-year">
                    <div class="rating">
                        <img src="" alt="" width="17px" height="17px">
                        <div id="star-five"></div>
                        <p>9.7</p>
                        <div class="line"></div>
                     </div>
                    <div class="year">
                        <p>2021</p>
                     </div>
                 </div>
                  <div class="tag-list">
                    <p class="tag">Original</p>
                    <p class="tag">Fantasi</p>
                    <p class="tag">Musik</p>
                    <p class="tag">Remaja Laki-laki</p>
                    <p class="tag">Bahasa Jepang</p>
                  </div>
                 <div class="description">
                      <p>Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan</p>
                  </div>
            </div>
        </div>
        `;
    }

}



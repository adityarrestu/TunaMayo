class TagItem extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM =  this.attachShadow({mode: "open"});      
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = `
        <style>
            :host {
                margin: 0px;
                margin-right: 10px;
                padding: 2px 10px;
                color: rgb(255, 255, 255, 0.8);
                background: rgb(35,36,40, 0.2);
                border-radius: 5px;
            }
        </style>
        
        <p class="tag">${this._tag}</p>
        `;
    }

}

customElements.define("tag-item", TagItem);
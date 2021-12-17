class AppBar extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode: "closed"});
    }

    connectedCallback() {
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
                z-index: 17;
                position: fixed;
                display: flex;
                width: 100%;
                height: 60px;
                left: 0px;
                top: 0px;
                justify-content: space-between;
                align-items: center;
                padding: 20px 10px;
                background: #232428;
            }

            .left-nav {
                display: flex;
                margin-left: 16px;
                align-items: center;
            }

            nav, ul, li, a {
                display: inline-block;
                padding: 0px 13px;
                text-decoration: none;
                line-height: 21px;
                list-style: none;
                color: #FFFFFF;
                transition: all 0.3s ease 0s;
            }
            
            nav a:hover {
                color: #3E96DB;
            }

            .logo {
                width: 136px;
                height: 25px;
                cursor: pointer;
            }
        </style>

        <div class="left-nav">

            <img class="logo" src="../src/img/logo.svg" alt="tunamayo">
        
            <nav>
                <ul>
                    <li><a href="#">Movie</a></li>
                    <li><a href="#">Drama</a></li>
                    <li><a href="#">Anime</a></li>
                </ul>
            </nav>
            
        </div>
        `;
    }
}

customElements.define("app-bar", AppBar);
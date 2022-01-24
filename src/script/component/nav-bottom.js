import { routeHome } from "../main.js";

class NavBottom extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="./src/style/nav-bottom.css">

            <button class="homepage">
                <img src="./src/img/icon/home.png" alt="homepage">
                <p>Beranda</p>
            </button>
            
            <button class="explor">
                <img src="./src/img/icon/eksplor.png" alt="explore">
                <p>Klip</p>
            </button>

            <button class="collection">
                <img src="./src/img/icon/history.png" alt="collection">
                <p>Koleksi</p>
            </button>

            <button class="profile">
                <img src="./src/img/icon/user.png" alt="profile">
                <p>Profil</p>
            </button>
        `;

        const linkHome = this.shadowDOM.querySelector(".homepage");
        linkHome.addEventListener("click", () => {
            console.log("ditekan..");
            routeHome();
        })
    }
}

customElements.define("nav-bottom", NavBottom);
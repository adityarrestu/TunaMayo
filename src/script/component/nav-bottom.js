import { routeHome } from "../main.js";
import { notAvailable } from "../main.js";

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
            
            <button class="explor not-available">
                <img src="./src/img/icon/eksplor.png" alt="explore">
                <p>Klip</p>
            </button>

            <button class="collection not-available">
                <img src="./src/img/icon/history.png" alt="collection">
                <p>Koleksi</p>
            </button>

            <button class="profile not-available">
                <img src="./src/img/icon/user.png" alt="profile">
                <p>Profil</p>
            </button>
        `;

        const linkHome = this.shadowDOM.querySelector(".homepage");
        linkHome.addEventListener("click", () => {
            routeHome();
        })

        const notAvailableContent = this.shadowDOM.querySelectorAll(".not-available");
        notAvailableContent.forEach(element => {
            element.addEventListener("click", () => {
                notAvailable();
            })
        })
    }
}

customElements.define("nav-bottom", NavBottom);
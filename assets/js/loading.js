import { load } from "../../dist/zmatLazyLoader.js";
import { groupLoad } from "../../dist/zmatLazyLoader.js";

document.addEventListener("click" , ()=> [
    load("./assets/images/logo.jpg" , {
        type: "img",
        parent: "#header__logo",
        id: "logo",
        class: "rounded-full",
        attr: {
            alt: "logo",
            width: "75px",
            height: "75px",
        }
    })


])
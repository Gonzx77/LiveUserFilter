import { getAllUsers } from "./modules/app.js";
import { maquetar } from "./modules/galery.js";

let container = document.querySelector("#mBDS2");
let searchBar = document.querySelector("#inputSearch");
let findUsersCont = document.querySelector("#findUsersCont");

searchBar.addEventListener("change", async() => {
    console.log("Buscando...");
    container.innerHTML = "";
    findUsersCont.innerHTML = 0;

    let text = searchBar.value;
    text = text.toLowerCase();
    
    let data = await getAllUsers();
    data = await data.json();

    for (let i = 0; i < 100; i++) {
        let user = data[i];
        let userName = data[i].name_full;
        let userName1 = userName.toLowerCase();

        if (userName1.startsWith(text)){

            let id = user.id;
            await maquetar(id);
        }
    }

});
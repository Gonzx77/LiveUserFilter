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

    let cont = 0;

    for (let i = 0; i < 100; i++) {
        let user = data[i];
        let userName = user.name_full;
        let userName1 = userName.toLowerCase();

        let userDescript = user.description;
        let userDescript1 = userDescript.toLowerCase();

        if (userName1.startsWith(text) || userDescript1.includes(text)){
            let id = user.id;
            await maquetar(id);
            cont ++;
        }
    };

    if (cont == 0){
        alert("No se encontraron resultados :(");
    };

});
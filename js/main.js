import { getAllUsers } from "./modules/app.js";

let searchBar = document.querySelector("#inputSearch");

searchBar.addEventListener("change", async() => {
    console.log("Buscando...");
    let data = await getAllUsers();
    data = await data.json();
    console.log(data);
});
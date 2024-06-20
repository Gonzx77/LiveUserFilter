import { getUser } from "./app.js";

let container = document.querySelector("#mBDS2");


export const maquetar = async(id) => {
    let user = await getUser(id);
    user = await user.json();

    let name = user.name_full;
    let description = user.description;
    let avatar = user.avatar;

    let plantilla = /*html*/`
    <div class="element">
        <div id="eS1" class="elementSec">
            <div class="imgDiv">
                <img src="${avatar}" class="img">
            </div>
        </div>
        <div id="eS2" class="elementSec">
            <div class="userTextDiv">
                <p id="userName">${name}</p>
                <p id="userLocation">${description}</p>
            </div>
        </div>
    </div>
    `

    let findUsersCont = document.querySelector("#findUsersCont");
    let actual = parseInt(findUsersCont.textContent);
    actual += 1;

    findUsersCont.innerHTML = actual;
    container.innerHTML += plantilla;
};
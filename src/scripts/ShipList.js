import { getHaulers, getShips } from "./database.js";

const ships = getShips()
const haulers = getHaulers()

// ships.sort(function (a, b) {
//     if (a.name < b.name) {
//         return -1
//     }
//     if (a.name > b.name) {
//         return 1
//     }
//     return 0
// })

ships.sort((a, b) => a.name.localeCompare(b.name))

document.addEventListener(
    "click",
    (clickEvent) => {
        const shipClicked = clickEvent.target
        
        if (shipClicked.dataset.type === "ship") {            
            for (const hauler of haulers) {
                if (hauler.id === parseInt(shipClicked.dataset.haulerid)) {
                    window.alert(`${shipClicked.dataset.name} is being hauled by ${hauler.name}`)
                }
            }
        }
    }
)

export const ShipList = () => {

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `
                    <li class="detail--item"
                    data-type="ship"
                    data-id="${ship.id}"
                    data-haulerId="${ship.haulerShipId}"
                    data-name="${ship.name}"
                    >${ship.name}
                    </li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}


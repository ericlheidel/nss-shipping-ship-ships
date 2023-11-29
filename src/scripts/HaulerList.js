import { getHaulers, getShips } from "./database.js";

const haulers = getHaulers()
const ships = getShips()

haulers.sort(function (a, b) {
    if (a.name < b.name) {
        return -1
    }
    if (a.name > b.name) {
        return 1
    }
    return 0
})

document.addEventListener(
    "click",
    (clickEvent) => {
        const haulerclicked = clickEvent.target

        let n = 0

        if (haulerclicked.dataset.type === "hauler") {
            for (const ship of ships) {
                if (parseInt(haulerclicked.dataset.id) === ship.haulerShipId) {
                    n++
                }
            }
            window.alert(`This hauler is carrying ${n} ships.`)
        }
    }
)

export const HaulerList = () => {

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `
                    <li
                        class="detail--item"
                        data-type="hauler"
                        data-id=${hauler.id}
                        >${hauler.name}
                    </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}
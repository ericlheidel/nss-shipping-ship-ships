import { getDocks, getHaulers } from "./database.js";

const docks = getDocks()
const haulers = getHaulers()

docks.sort(function (a, b) {
    if (a.location < b.location) {
        return -1
    }
    if (a.location > b.location) {
        return 1
    }
    return 0
})



document.addEventListener(
    "click",
    (clickEvent) => {
        const dockClicked = clickEvent.target

        let dockHaulerMatches = []

        if (dockClicked.dataset.type === "dock") {
            for (const hauler of haulers) {
                if (hauler.dockId === parseInt(dockClicked.dataset.id)) {
                    dockHaulerMatches.push(hauler.name)
                }
            }
    
            if (dockHaulerMatches.length === 0) {
                window.alert(`${dockClicked.dataset.location} is currently unloading nothing`)
            } else {
                window.alert(`${dockClicked.dataset.location} is currently unloading ${dockHaulerMatches.join(`, `)}`)
            }
        }
    }
)

export const DockList = () => {

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `
                    <li
                        class="detail--item"
                        data-type="dock"
                        data-location="${dock.location}"
                        data-id="${dock.id}"
                        >${dock.location} can hold ${dock.volume} million tons of cargo.
                    </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}
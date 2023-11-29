const database = {
    docks: [
        {
            id: 1,
            location: "Shanghai, China",
            volume: "43.5"
        },
        {
            id: 2,
            location: "Busan, South Korea",
            volume: "21.6"
        },
        {
            id: 3,
            location: "Rotterdam, The Netherlands",
            volume: "14.35"
        },
        {
            id: 4,
            location: "Antwerp, Belgium",
            volume: "12.04"
        },
        {
            id: 5,
            location: "Venice, Italy",
            volume: "50.6"
        }
    ],
    haulers: [
        {
            id: 1,
            name: "Ever Given",
            dockId: 3
        },
        {
            id: 2,
            name: "Fish and Ships",
            dockId: 4
        },
        {
            id: 3,
            name: "Seasick",
            dockId: 1
        },
        {
            id: 4,
            name: "Hang Ten",
            dockId: 2
        },
        {
            id: 5,
            name: "Hauler #5",
            dockId: 1
        }
    ],
    ships: [
        {
            id: 1,
            name: "Rickety Crickets",
            haulerShipId: 4
        },
        {
            id: 2,
            name: "Old Grey Mare",
            haulerShipId: 1
        },
        {
            id: 3,
            name: "60% of the Time",
            haulerShipId: 3
        },
        {
            id: 4,
            name: "Not Gonna Make it",
            haulerShipId: 2
        },
        {
            id: 5,
            name: "Dreamboat Annie",
            haulerShipId: 1
        },
        {
            id: 6,
            name: "Check Engine",
            haulerShipId: 4
        },
        {
            id: 7,
            name: "Zero Miles Per Gallon",
            haulerShipId: 3
        },
        {
            id: 8,
            name: "Across the Universe",
            haulerShipId: 3
        },
        {
            id: 9,
            name: "Ship #9",
            haulerShipId: 2
        },
        {
            id: 10,
            name: "The Tennessee Kid",
            haulerShipId: 1
        },
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShips = () => {
    return database.ships.map(ship => ({...ship}))
}
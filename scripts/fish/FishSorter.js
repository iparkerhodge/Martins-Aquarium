import { useFish } from "./FishDataProvider.js"

const fishes = useFish()


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    for (const fish of fishes) {
        if (fish.size % 3 === 0 && fish.size !== 777) {
            fish.category = "Holy Fish &#10024"
            holyFish.push(fish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of fishes) {
        if (fish.size % 5 === 0) {
            fish.category = "Soldier &#127993"
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of fishes) {
        if (fish.size % 3 !== 0 && fish.size % 5 !== 0) {
            fish.category = "Not Worthy &#10060"
            regularFish.push(fish)
        }
    }
    return regularFish
}

export const theHolyOne = () => {
    // Any fish not a multiple of 3 or 5
    const holyOne = []
    for (const fish of fishes) {
        if (fish.size === 777) {
            fish.category = "THE MOST HIGH &#128591"
            holyOne.push(fish)
        }
    }
    return holyOne
}
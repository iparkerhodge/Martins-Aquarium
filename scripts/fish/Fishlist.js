import Fish from "./Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish } from './FishSorter.js'

/**
 *  FishList which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
const FishList = () => {
    const holyFish = mostHolyFish()
    const soldiers = soldierFish()
    const regularFish = nonHolyFish()
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishlist")

    for (const fishObject of holyFish) {
        contentElement.innerHTML += Fish(fishObject)
    }
    for (const fishObject of soldiers) {
        contentElement.innerHTML += Fish(fishObject)
    }
    for (const fishObject of regularFish) {
        contentElement.innerHTML += Fish(fishObject)
    }
}

export default FishList
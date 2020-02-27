import { useFish } from "./FishDataProvider"
import Fish from "./Fish"

/**
 *  FishList which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishlist")
    const fishes = useFish()

    for (const fishObject of fishes) {
        contentElement.innerHTML += Fish(fishObject)
    }
}

export default FishList
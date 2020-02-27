import { useTip } from "./TipDataProvider.js"
import Tip from "./Tip.js"


const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tiplist")
    const tips = useTip()

    for (const tipObject of tips) {
        contentElement.innerHTML += Tip(tipObject)
    }
}

export default TipList
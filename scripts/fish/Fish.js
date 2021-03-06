/**
 *  Fish which renders individual fish objects as HTML
 */
const Fish = (fish) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fish.image}" alt="">
            </div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__category">${fish.category}</div>
            <button id="button--${fish.name.replace("'","_")}">Details</button>

            <dialog class="dialog--fish" id="details--${fish.name}">
                <div>Species: ${fish.species}</div>
                <div>Location: ${fish.location}</div>
                <div>Length: ${fish.size}in long</div>
                <div>Food: ${fish.food.join(", ")}</div>

                <button class="button--close">Close</button>
            </dialog>
        </div>
    `
}

export default Fish
const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button__close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line



    // Show Alfa's details when the button is clicked
    document.querySelector("#button__Alfa").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__Alfa")
            theDialog.showModal()
        }
        )

    // Show Beta's details when the button is clicked
    document.querySelector("#button__Beta").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__Beta")
            theDialog.showModal()
        }
        )

    // Show Charlie's details when the button is clicked
    document.querySelector("#button__Charlie").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__Charlie")
            theDialog.showModal()
        }
        )
        
    // Show Delta's details when the button is clicked
    document.querySelector("#button__Delta").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__Delta")
            theDialog.showModal()
        }
        )

    // Show Echo's details when the button is clicked
    document.querySelector("#button__Echo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__Echo")
            theDialog.showModal()
        }
        )

    // Show Foxtrot's details when the button is clicked
    document.querySelector("#button__Foxtrot").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__Foxtrot")
            theDialog.showModal()
        }
        )

}

export default initializeDetailButtonEvents
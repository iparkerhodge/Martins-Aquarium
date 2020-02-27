const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("insert selector here")
    const tips = useTip()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="TipList">
            All the Tip go here!
        </section>
    `
}

export default TipList
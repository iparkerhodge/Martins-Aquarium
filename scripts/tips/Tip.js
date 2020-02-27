const Tip = (tip) => {
    return `
    <section class="tip">
        <h5 class="tip__head">${tip.main}</h5>
        <p>${tip.reason}</p>
    </section>
    `
}

export default Tip
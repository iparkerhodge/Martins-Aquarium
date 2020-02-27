const Tip = (tip) => {
    return `
    <section class="tip">
        <h5>${tip.main}</h5>
        <p>${tip.reason}</p>
    </section>
    `
}

export default Tip
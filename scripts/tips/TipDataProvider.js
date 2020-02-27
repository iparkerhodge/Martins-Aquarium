const tipSection = [
    {
        main: "Don't tap the glass",
        reason: "because the fish could die"
    },

    {
        main: "Make sure to feed the fish",
        reason: "or else the fish will die"
    },

    {
        main: "Make sure to change the water every week",
        reason: "or the fish will likely die"
    }
]

export const useTip = () => {
    return tipSection.slice()
}
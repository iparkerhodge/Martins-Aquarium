/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Jutz'kar",
        species: "Holy Fish Jutz'kar",
        size: 777,
        location: "Off the coast of the Holy City of Tikal",
        food: ["all unworthy beings"],
        image: "https://pbs.twimg.com/profile_images/924320665053868038/Syp6usJs.jpg"
    },
    
    {
        name: "Alfa",
        species: "Swordfish (X. gladius)",
        size: 118,
        location: "Harvested on a Mediterranean cruise scuba excursion",
        food: ["mackrel", "crustaceans", "herring", "squid"],
        image: "https://image.shutterstock.com/image-illustration/swordfish-on-white-background-jumping-260nw-596820218.jpg"
    },

    {
        name: "Beta",
        species: "Clownfish (A. ocellaris)",
        size: 6,
        location: "Harvested in a lagoon off the coast of Seychelles",
        food: ["zooplankton", "undigested food from anemones"],
        image: "https://petco.scene7.com/is/image/PETCO/151203-center-1?$ProductDetail-large$"
    },

    {
        name: "Charlie",
        species: "Siamese Fighting Fish (B. splendens)",
        size: 3,
        location: "Harvested from Chao Phraya River, Thailand",
        food: ["zooplankton", "other Siamese fighting fish"],
        image: "https://petco.scene7.com/is/image/PETCO/1397583-right-1"
    },

    {
        name: "Delta",
        species: "Hammerhead Shark (S. lewini)",
        size: 40,
        location: "Harvested on a Galapagos excursion",
        food: ["Vegeterian - fish are friends, not food."],
        image: "https://image.shutterstock.com/image-illustration/hammerhead-shark-on-white-realistic-260nw-627099173.jpg"
    },

    {
        name: "Echo",
        species: "Yellowfin Tuna",
        size: 95,
        location: "Harvested near San Benedicto Island, Pacific Ocean",
        food: ["mackrel", "saurie", "squid", "crustaceans"],
        image: "https://caseagrant.ucsd.edu/sites/default/files/yellowfin_tuna_preview_0_0.png"
    },

    {
        name: "Foxtrot",
        species: "Humpback Anglerfish",
        size: 7,
        location: "Harvested in the Marianas Trench with James Cameron",
        food: ["nearly everything that it encounters"],
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Humpback_anglerfish.png"
    }

]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}
/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Alfa",
        scientificName: "Swordfish (X. gladius)",
        length: "3m long",
        location: "Harvested on a Mediterranean cruise scuba excursion",
        food: ["mackrel", "crustaceans", "herring", "squid"]
    },

    {
        name: "Beta",
        scientificName: "Clownfish (A. ocellaris)",
        length: "17cm long",
        location: "Harvested in a lagoon off the coast of Seychelles",
        food: ["zooplankton", "undigested food from anemones"]
    },

    {
        name: "Charlie",
        scientificName: "Siamese Fighting Fish (B. splendens)",
        length: "7cm long",
        location: "Harvested from Chao Phraya River, Thailand",
        food: ["zooplankton", "other Siamese fighting fish"]
    },

    {
        name: "Delta",
        scientificName: "Hammerhead Shark (S. lewini)",
        length: "0.9m long",
        location: "Harvested on a Galapagos excursion",
        food: ["Vegeterian - fish are friends, not food."]
    },

    {
        name: "Echo",
        scientificName: "Yellowfin Tuna",
        length: "2.4m long",
        location: "Harvested near San Benedicto Island, Pacific Ocean",
        food: ["mackrel", "saurie", "squid", "crustaceans"]
    },

    {
        name: "Foxtrot",
        scientificName: "Humpback Anglerfish",
        length: "18 cm long",
        location: "Harvested in the Marianas Trench with James Cameron",
        food: ["nearly everything that it encounters"]
    }

]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}
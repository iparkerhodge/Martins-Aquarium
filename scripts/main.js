import initializeDetailButtonEvents from './dialog.js'
import { useFish } from './FishDataProvider.js'

initializeDetailButtonEvents()

const arrayOfTheFish = useFish()

for (const fishObject of arrayOfTheFish) {
    console.log(fishObject)
}
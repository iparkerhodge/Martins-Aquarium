import initializeDetailButtonEvents from './fish/dialog.js'
import { useFish } from './fish/FishDataProvider.js'
import FishList from './fish/Fishlist.js'

const arrayOfTheFish = useFish()

FishList()

initializeDetailButtonEvents()


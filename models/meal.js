import mongoose from "mongoose"

const Schema = mongoose.Schema

const mealSchema = new Schema({
  menu: {type: String, unique: true}
})

const Meal = mongoose.model("Meal", mealSchema)

export {
  Meal
}
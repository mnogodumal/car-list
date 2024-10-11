import mongoose from "mongoose"

const carSchema = new mongoose.Schema({
  mark: String,
  model: String,
  engine: {
    power: Number,
    volume: Number,
    transmission: String,
    fuel: String,
  },
  drive: String,
  equipmentName: String,
  price: Number,
  createdAt: { type: Date, default: Date.now },
})

const Car = mongoose.model("Car", carSchema)

export default Car

import express from "express"
import mongoose from "mongoose"
import { getMarks, getModels, getCars } from "./controllers/carController"

const app = express()
const PORT = 3001

mongoose
  .connect(
    "mongodb://hrTest:hTy785JbnQ5@mongo0.maximum.expert:27423/?authSource=hrTest&replicaSet=ReplicaSet&readPreference=primary"
  )
  .then(() => {
    console.log("MongoDB подключен")
    app.get("/api/marks", getMarks)
    app.get("/api/models", getModels)
    app.get("/api/cars", getCars)
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`)
    })
  })
  .catch((err) => console.error(err))

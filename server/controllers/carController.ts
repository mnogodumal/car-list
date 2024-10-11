import { Request, Response } from "express"
import Car from "../models/carModel"

export const getMarks = async (req: Request, res: Response) => {
  try {
    const marks = await Car.distinct("mark")
    res.json(marks)
  } catch (error) {
    res.status(500).json({ error: "Ошибка получения марок" })
  }
}

export const getModels = async (req: Request, res: Response) => {
  const { mark } = req.query
  try {
    const models = await Car.distinct("model", { mark })
    res.json(models)
  } catch (error) {
    res.status(500).json({ error: "Ошибка получения моделей" })
  }
}

export const getCars = async (req: Request, res: Response) => {
  const { mark, models } = req.query
  try {
    const cars = await Car.find({ mark, model: { $in: models } })
    res.json(cars)
  } catch (error) {
    res.status(500).json({ error: "Ошибка получения автомобилей" })
  }
}

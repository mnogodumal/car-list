export interface Car {
  _id: string
  mark: string
  model: string
  engine: {
    power: number
    volume: number
    transmission: string
    fuel: string
  }
  drive: string
  equipmentName: string
  price: number
  createdAt: string
}

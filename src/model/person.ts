import { Friend } from "./friend"

export interface Person {
    id: number
    guid: string
    isActive: boolean
    age: number
    name: string
    email: string
    address: string
    registered: string
    friends: Friend[]
}
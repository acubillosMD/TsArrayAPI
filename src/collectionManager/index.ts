import { Friend } from "model/friend";
import { Person } from "model/person";
import personJson from '../collections/person.json'

export class ArrayApiCommonlyUsed {

    //Obetener el total de personas
    GetPersonsCount(): number {
        return personJson.length
    }

    //Obtener personas mayores a 30 años
    FilterByAgeOverThirty(): Person[]  {
        const persons: Person[] = personJson.filter(person => person.age > 30)
        return persons;
    }

    //Obtener solo el nombre de personas mayores a 30 años
    GetPersonNamesWithAgeOverThirty(): string[] {
        const personsNames: string[] = personJson.filter(person => person.age > 30)
        .map(person => {
            return person.name
        })
        return personsNames;
    }

    //Obtener personas sin amigos
    GetPersonsWithoutFriends(): Person[] {
        const persons: Person[] = personJson.filter(person => person.friends.length <= 0)
        return persons;
    }

    //Obtener persona por ID
    GetPersonById(id: number): Person | undefined{
        const person = personJson.find(person => person.id === id)
        return person
    }

    //Obtener si persona existe por nombre
    PersonExists(name: string): boolean {
        return personJson.some(person => person.name === name)
    }

    //Obtener todos los amigos
    GetAllFriends(): Friend[] {
        const friends: Friend[] = personJson.map(person => person.friends).flat()
        return friends
    }

    //Obtener solo los nombres de todos los amigos
    GetAllFriendsName(): string[] {
        const friends: Friend[]  = personJson.filter(person => person.friends.flat())
        const names: string[] = friends.map(friends => friends.name)
        return names
    }

    //Cual es el usuario con estado desactivado con más amigos.
    GetDisabledUserWithMostFriends(): Person | undefined {
        const disabledPersons: Person | undefined = personJson.filter(person => !person.isActive)
        .sort( (a, b) => b.friends.length - a.friends.length )
        .at(0)
        return disabledPersons
    }

    //Contar la cantidad de amigos totales que existen entre los usuarios con estado activo.
    GetTotalFriendsFromActiveUsers(): number {
        const activePersons: Person[] = personJson.filter(person => person.isActive)
        const friends: Friend[] = activePersons.map(person => person.friends).flat()
        return friends.length
    }

    //Cual es el promedio de edad entre los usuarios
    GetPersonAgeAverage(): number {
        let ages: number[] = personJson.map(person => person.age);
        let totalAgeSum = ages.reduce((acc, val) => acc + val )
        let average = totalAgeSum / ages.length
        return average;
    }

    //Cual es el usuario más viejo con estado activo que tiene menos amigos
    GetOldestWithLessFriends(): Person {
        const personByAgeDescending = personJson.sort( (a, b) => b.age - a.age )
        const personsByAgeAndLessFriends = personByAgeDescending.sort(person => person.friends.length)
        const oldestPersonWithLessFriends = personsByAgeAndLessFriends[0]
        return oldestPersonWithLessFriends
    }

    //Cual persona tiene el nombre más largo 
    GetPersonWithTheLongestName(): Person {
        return personJson.sort((a, b) => b.name.length - a.name.length)[0]
    }

    //Cual persona tiene el nombre más corto de todos 
    GetPersonWithShortestName(): Person {
        return personJson.sort((a, b) => a.name.length - b.name.length)[0]
    }

    //Ordernar personas alfabeticamente por nombre
    GetPersonSortedByName(): Person[] {
        return personJson.sort((a, b) => a.name.localeCompare(b.name) )
    }

    //Cual amigo tiene el nombre más largo de todos
    GetFriendWithLongestName(): Friend {
        const friends: Friend[]  = personJson.map(person => person.friends).flat()
        const friendWithLongestName: Friend = friends.sort((a, b) => b.name.length - a.name.length)[0]
        return friendWithLongestName
    }

    //Cual amigo tiene el nombre más corto de todos
    GetFriendWithShortestName(): Friend {
        const friends: Friend[]  = personJson.map(person => person.friends).flat()
        const friendWithShortestName: Friend = friends.sort((a, b) => a.name.length - b.name.length)[0]
        return friendWithShortestName
    }

    //Cual persona tiene la numeración más alta en su dirección
    GetHighestAddressNumber(): number {
        const personAddresses: string[] = personJson.map(person => person.address)
        const addressesNumber: number[] = personAddresses.map(address => {
            const addressNumber: number = Number(address.split(' ')[0].trim())
            return addressNumber
        })
        let highestAddressNumber = addressesNumber.sort((a, b) => b - a)[0]
        return highestAddressNumber;
    }

    //Cual persona tiene el codigo postal menor
    GetLowestAddressNumber(): number {
        const personAddresses: string[] = personJson.map(person => person.address)
        const addressesNumber: number[] = personAddresses.map(address => {
            const addressNumber: number = Number(address.split(' ').at(-1))
            return addressNumber
        })
        const highestAddressNumber = addressesNumber.sort((a, b) => a - b)[0]
        return highestAddressNumber;
    }
}
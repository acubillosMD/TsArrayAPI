import { Friend } from "model/friend";
import { Person } from "model/person";
import personJson from '../collections/person.json'

export class ArrayApi{

    //Obetener el total de personas
    GetPersonsCount(): number {
        return personJson.length
    }

    //Obtener personas mayores a 30 años
    FilterByAgeOverThirty(): Person[]  {
        let persons: Person[] = personJson.filter(person => person.age > 30)
        return persons;
    }

    //Obtener solo el nombre de personas mayores a 30 años
    GetPersonNamesWithAgeOverThirty(): string[] {
        let personsNames: string[] = personJson.filter(person => person.age > 30)
        .map(person => {
            return person.name
        })
        return personsNames;
    }

    //Obtener personas sin amigos
    GetPersonsWithoutFriends(): Person[] {
        let persons: Person[] = personJson.filter(person => person.friends.length <= 0)
        return persons;
    }

    //Obtener persona por ID
    GetPersonById(id: number): Person | undefined{
        let person = personJson.find(person => person.id === id)
        return person
    }

    //Obtener si persona existe por nombre
    PersonExists(name: string): boolean {
        return personJson.some(person => person.name === name)
    }

    //Obtener todos los amigos
    GetAllFriends(): Friend[] {
        let friends: Friend[] = personJson.map(person => person.friends).flat()
        return friends
    }

    //Obtener solo los nombres de todos los amigos
    GetAllFriendsName(): string[] {
        let friends: Friend[]  = personJson.filter(person => person.friends.flat())
        let names: string[] = friends.map(friends => friends.name)
        return names
    }

    //Cual es el usuario con estado desactivado con más amigos.
    GetDisabledUserWithMostFriends(): Person | undefined {
        let disabledPersons: Person[] = personJson.filter(person => !person.isActive)
        let sortedByFriendsCount = disabledPersons.sort( (a, b) => b.friends.length - a.friends.length )
        let mostFriends: number = sortedByFriendsCount[0].friends.length
        let person: Person | undefined = disabledPersons.find(person => person.friends.length == mostFriends)
        return person
    }

    //Contar la cantidad de amigos totales que existen entre los usuarios con estado activo.
    GetTotalFriendsFromActiveUsers(): number {
        let activePersons: Person[] = personJson.filter(person => person.isActive)
        let friends: Friend[] = activePersons.map(person => person.friends).flat()
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
        let personByAgeDescending = personJson.sort( (a, b) => b.age - a.age )
        console.log( personByAgeDescending )
        let personsByAgeAndLessFriends = personByAgeDescending.sort(person => person.friends.length)
        let oldestPersonWithLessFriends = personsByAgeAndLessFriends[0]
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
    GetPersonSortedBayName(): Person[] {
        return personJson.sort((a, b) => a.name.localeCompare(b.name) )
    }

    //Cual amigo tiene el nombre más largo de todos

    //Cual amigo tiene el nombre más corto de todos

    //Cual usuario tiene la numeración más alta en su dirección

    //Cual usuario tiene el codigo postal menor

}
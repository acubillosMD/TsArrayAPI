import { Friend } from "model/friend";
import { Person } from "model/person";
import { isStringObject } from "util/types";
import personJson from '../collections/person.json'

export class ArrayApiExamples {

    // Obtener la segunda persona 
    // Devuelve el elemento en la posiscion especificada avanzando desde el primer elemento
    GetSecondPersonUssingAt(): Person | undefined {
        return personJson.at(2)
    }

    // Obtener ultima persona
    // Devuelve el elemento en la posiscion especificada avanzando desde el ultimo elemento
    GetLastPersonUssingAt(): Person | undefined {
        return personJson.at(-1)
    }

    // Obtiene un iterador que devuelve un par key/value
    EntryExample(): void{
        const iterator = personJson.entries()
        for(const [index, element] of iterator ) {
            console.log(index, '-' , element.name)
        }
    }

    // Devuelve true si todos los elementos cumplen con la condicion
    // Todas las edades son menores a 100?
    EveryExample(): void {
        let res = personJson.every(person => person.age < 100)
        console.log(res)
    }

    // Obtener el indice de un elemento si cumple la condicion
    FindIndexExample(): void {
        let res = personJson.findIndex(person => person.name === "Leila Castillo")
        console.log(res)
    }

    // Obtiene el primer elemento que cumple la condicion
    FindExample(): void {
        let res = personJson.find(person => person.age === 35)
        console.log(res?.name)
    }

    // Une varios arreglos en uno
    FlatExample(): void{
        let friends = personJson.map(person => person.friends)
        console.log(friends)
        console.log(friends.flat())
    }

    // Crea un nuevo arreglo segun la condicion
    FlatMapExample(): void {
        let res = personJson.flatMap(person => person.friends)
        console.log(res)
    }

    // Obtiene las llaves de cada elemento del iterador
    KeysExample(): void {
        let iterator = personJson.keys()
        for(const key of iterator) {
            console.log(key)
        }
    }
    
    // Devuelve y quita el ultimo elemento del arreglo
    PopExample(): void {
        let personlist = personJson.map(person => person)
        console.log('antes', personlist.length)
        console.log(personlist.pop()) 
        console.log('despues', personlist.length)
    }

    // Agrega un elemento al final de un arreglo
    PushExaple(): void {
        let numbers = [32, 433, 12, 232, 2, 1, 5]
        numbers.push(8)
        console.log(numbers)
    }

    // Devuelve y quita el primer elemento del arreglo
    ShiftExample(): void {
        let personlist = personJson.map(person => person)
        console.log('antes', personlist.length)
        console.log(personlist.shift()) 
        console.log('despues', personlist.length)
    }

    // Devuelve true si al menos un elemento cumple con la condicion
    SomeExample(): void {
        let res = personJson.some(person => person.age === 35)
        console.log(res)
    }

    // Ordenar un arreglo
    // Nota: Para ordenar de forma ascendente o descente un arreglo de numeros tiene
    // utilizar un comparador
    SortNumbersArrayExample(): void {
        let numbers = [32, 433, 12, 232, 2, 1, 5]
        let ascending = numbers.sort((a, b) => a - b)
        console.log('ascendente', ascending)

        let descending = numbers.sort((a, b) => b - a)
        console.log('descendente', descending)
    }

    SortByAlphabeth(): void {
        let letters = ['d', 'a', 'c', 's', 'q', 'e']
        let ascending = letters.sort((a, b) => a.localeCompare(b))
        console.log('ascendente', ascending)

        let descending = letters.sort((a, b) => b.localeCompare(a))
        console.log('descendente', descending)
    }

    
}
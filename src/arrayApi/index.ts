import { Person } from "model/person";
import personJson from '../collections/person.json'

export class ArrayApiExamples {

    // Obtener la segunda persona 
    // Devuelve el elemento en la posiscion especificada avanzando desde el primer elemento
    GetSecondPersonUssingAt(): void {
        const res = personJson.at(2)
        console.log(res)
    }

    // Obtener ultima persona
    // Devuelve el elemento en la posiscion especificada avanzando desde el ultimo elemento
    GetLastPersonUssingAt(): void {
        const res = personJson.at(-1)
        console.log(res)
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
        const res = personJson.every(person => person.age < 100)
        console.log(res)
    }

    // Obtener el indice de un elemento si cumple la condicion
    FindIndexExample(): void {
        const res = personJson.findIndex(person => person.name === "Leila Castillo")
        console.log(res)
    }

    // Obtiene el primer elemento que cumple la condicion
    FindExample(): void {
        const res = personJson.find(person => person.age === 35)
        console.log(res?.name)
    }

    // Une varios arreglos en uno
    FlatExample(): void{
        const friends = personJson.map(person => person.friends)
        console.log(friends)
        console.log(friends.flat())
    }

    // Crea un nuevo arreglo segun la condicion
    FlatMapExample(): void {
        const res = personJson.flatMap(person => person.friends)
        console.log(res)
    }

    // Obtiene las llaves de cada elemento del iterador
    KeysExample(): void {
        const iterator = personJson.keys()
        for(const key of iterator) {
            console.log(key)
        }
    }
    
    // Devuelve y quita el ultimo elemento del arreglo
    PopExample(): void {
        const personlist = personJson.map(person => person)
        console.log('antes', personlist.length)
        console.log(personlist.pop()) 
        console.log('despues', personlist.length)
    }

    // Agrega un elemento al final de un arreglo
    PushExample(): void {
        const numbers = [32, 433, 12, 232, 2, 1, 5]
        numbers.push(8)
        console.log(numbers)
    }

    // Devuelve y quita el primer elemento del arreglo
    ShiftExample(): void {
        const personlist = personJson.map(person => person)
        console.log('antes', personlist.length)
        console.log(personlist.shift()) 
        console.log('despues', personlist.length)
    }

    // Devuelve true si al menos un elemento cumple con la condicion
    SomeExample(): void {
        const res = personJson.some(person => person.age === 35)
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
        const letters = ['d', 'a', 'c', 's', 'q', 'e']
        const ascending = letters.sort((a, b) => a.localeCompare(b))
        console.log('ascendente', ascending)
        const descending = letters.sort((a, b) => b.localeCompare(a))
        console.log('descendente', descending)
    }

    // Agregar un elemento al inicio de un array
    UnshiftExample(): void {
        const numbers = [ 2, 3, 4, 5, 6, 7, 8]
        console.log('antes', numbers)
        numbers.unshift(1)
        console.log('despues ', numbers)
    }

    // Invierte un arreglo
    ReverseExample(): void {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
        console.log(numbers.reverse())
    }

    // Sumar un arreglo de numeros
    ReduceWithNumbersExample(): void {
        const numbers = [1, 2, 3, 4]
        const res = numbers.reduce((accumulator, value) => { 
            return accumulator + value 
        })
        console.log(res)
    }

    // Concatenar un arreglo de caracteres
    ReduceWithStringExample(): void {
        const letters = ['h', 'o', 'l', 'a']
        const res = letters.reduce((accumulator, value) => { 
            return accumulator + value 
        })
        console.log(res)
    }

}
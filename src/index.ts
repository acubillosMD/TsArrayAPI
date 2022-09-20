import { ArrayApi } from "../src/collectionManager"

(async () => {

    let arrayApi = new ArrayApi()
    let res = arrayApi.GetPersonSortedBayName()
    console.log(res) 
})()
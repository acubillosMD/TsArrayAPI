import {describe, expect, test} from '@jest/globals';
import { ArrayApi } from "../../collectionManager"

describe('Array Api test', () => {

    const arrayApi = new ArrayApi()

    beforeEach(() => {
        
    })

    describe('Get persons count', () => {
        it('should get total count of the persons in the dataset', () => {
            let expected = 10
            let actual = arrayApi.GetPersonsCount()

            expect(expected).toEqual(actual)
        })
    })
})
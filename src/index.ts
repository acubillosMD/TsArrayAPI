import { ArrayApiExamples } from "../src/arrayApi"
import { ArrayApiCommonlyUsed } from "../src/collectionManager"

const apiArrayExamples = () => {
    const apiArrayExample = new ArrayApiExamples()
    // apiArrayExample.GetSecondPersonUssingAt()
    // apiArrayExample.GetLastPersonUssingAt()
    // apiArrayExample.EntryExample()
    // apiArrayExample.EveryExample()
    // apiArrayExample.FindIndexExample()
    // apiArrayExample.FindExample()
    // apiArrayExample.FlatExample()
    // apiArrayExample.FlatMapExample()
    // apiArrayExample.KeysExample()
    // apiArrayExample.PopExample()
    // apiArrayExample.PushExample()
    // apiArrayExample.ShiftExample()
    // apiArrayExample.SomeExample()
    // apiArrayExample.SortNumbersArrayExample()
    // apiArrayExample.SortByAlphabeth()
    // apiArrayExample.UnshiftExample()
    // apiArrayExample.ReverseExample()
    // apiArrayExample.ReduceWithNumbersExample()
    // apiArrayExample.ReduceWithStringExample()
}


const commomlyUsed = () =>  {
    const commomlyUsed = new ArrayApiCommonlyUsed()
    // const res = commomlyUsed.FilterByAgeOverThirty()
    // const res = commomlyUsed.GetPersonNamesWithAgeOverThirty()
    // const res = commomlyUsed.GetPersonsWithoutFriends()
    // const res = commomlyUsed.PersonExists('Cunningham Fuller')
    // const res = commomlyUsed.GetAllFriends()
    // const res = commomlyUsed.GetAllFriendsName()
    // const res = commomlyUsed.GetDisabledUserWithMostFriends()
    // const res = commomlyUsed.GetTotalFriendsFromActiveUsers()
    // const res = commomlyUsed.GetPersonAgeAverage()
    // const res = commomlyUsed.GetOldestWithLessFriends()
    // const res = commomlyUsed.GetPersonWithTheLongestName()
    // const res = commomlyUsed.GetPersonWithShortestName()
    // const res = commomlyUsed.GetPersonSortedByName()
    // const res = commomlyUsed.GetFriendWithLongestName()
    // const res = commomlyUsed.GetHighestAddressNumber()
    // const res = commomlyUsed.GetLowestAddressNumber()
    // console.log(res)
}

(async () => {
    commomlyUsed()
    // apiArrayExamples()
})()
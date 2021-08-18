// function superbowlWin(record) {
//         for (const winner of record) {
//             if (winner.result === "W"){
//             return winner.year}
//         }
// //}

function superbowlWin(recordsArray){
    const winningResults = recordsArray.find(recordObj => recordObj.result === "W")
    return !!winningResults ? winningResults.year : undefined
}
function findMatching(drivers, string){
  let matched = []
  let lowercasedString = string.toLowerCase();
  for(let driver of drivers){
    let lower = driver.toLowerCase()
    if(lower  === lowercasedString){
      matched.push(driver)
    }
  }
  return matched

}
function fuzzyMatch(drivers, string){
  let lowercasedString = string.toLowerCase();
  const results = drivers.filter(driver => {
    const lower = driver.toLowerCase();
    return lower.indexOf(lowercasedString) === 0;
  });
  return results
}


// function matchName(drivers,string){
//   for(let driver of drivers){
//     let newDriver = []
//     if(driver.name === string && driver.hometown === "Tampa Bay" ){
//       newDriver.push(driver,driver)
//       return newDriver
//     }
//   }
// }

function matchName(drivers, string) {
  const results = drivers.filter(driver => driver.name === string);
  return results;
}

const accountId = 144553
let accountEmail = "pawan12@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "bangaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block and fuctional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

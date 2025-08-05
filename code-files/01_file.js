const accountId = 123456
let accountEmail ="shrvan@gmail.com"
var accountPassword = "123456789"
accountCity = "sirohi"

//accountId =12//Not allowed

accountEmail ="abc@gmail.com"
accountPassword ="1234567"
accountCity ="ahmedabad"
var accountname;

/*
  prefer not to use var
  becouse of issue in block scope and functionL scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountname])
console.table([accountId, accountEmail, accountPassword, accountCity, accountname, accountId, accountEmail, accountPassword, accountCity, accountname])

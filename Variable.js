const accountId = 102323
let accountEmail = "John"
var accountPassword = "123"
/*

Const = Doesnt change the variable value
Let = Block variable used inside a scope {} and can be changed if its inside the scope
Var = golbal variable can be changed from any where

Prefer not to use var, Because of the issue in block scope and function scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword])
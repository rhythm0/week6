favorites = { fruit: "apples", snack: "cookies", color: "maroon", season: "spring" }
let { snack, color } = favorites
snack
// 'cookies'
color
// 'maroon'

let faves = ["apples", "maroon", "spring", "baseball"]
let [fruit, color] = [faves[0], faves[1]]
fruit
// 'apples'

let x = 5
let name = "Jeff"
let greeting = `Hello, ${name}` 
greeting
// 'Hello, Jeff'
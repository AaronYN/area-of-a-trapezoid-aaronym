game.splash("Let's calculate the area of a Trapezoid")
let base1 = game.askForNumber("What's the value of base1 (a)? ")
let base2 = game.askForNumber("Whats the value of base2 (b)")
let height = game.askForNumber("What's the height?")
let area = (base1 + base2) / 2 * height
game.splash("The area of the Trapezoid is:", area)

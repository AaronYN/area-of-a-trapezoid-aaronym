game.splash("Let's calculate the area of a Trapezoid")
base1 = game.ask_for_number("What's the value of base1 (a)? ")
base2 = game.ask_for_number("Whats the value of base2 (b)")
height = game.ask_for_number("What's the height?")
area = (base1 + base2) / 2 * height
game.splash("The area of the Trapezoid is:", area)
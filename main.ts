input.onButtonPressed(Button.A, function () {
    politie.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    politie.move(1)
    radio.sendValue("x", politie.get(LedSpriteProperty.X))
    radio.sendValue("y", politie.get(LedSpriteProperty.Y))
})
input.onButtonPressed(Button.B, function () {
    politie.turn(Direction.Right, 90)
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else {
        y = value
    }
    boef.delete()
    boef = game.createSprite(x, y)
})
let boef: game.LedSprite = null
let y = 0
let x = 0
let politie: game.LedSprite = null
politie = game.createSprite(0, 0)
radio.setGroup(5)
radio.sendValue("x", politie.get(LedSpriteProperty.X))
radio.sendValue("y", politie.get(LedSpriteProperty.Y))
x = 4
y = 4
boef = game.createSprite(x, y)
basic.forever(function () {
	
})

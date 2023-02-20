radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == ID) {
        meQuiere = true
        basic.showIcon(IconNames.Heart)
    } else {
        meQuiere = false
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (meQuiere) {
        destino = randint(1, players)
        if (destino != ID) {
            meQuiere = false
            basic.clearScreen()
            radio.sendNumber(destino)
        }
    }
})
function Configuracion (núm: number, núm2: number) {
    radio.setGroup(12)
    players = núm
    ID = núm2
    if (ID == 1) {
        meQuiere = true
        basic.showIcon(IconNames.Heart)
    } else {
        meQuiere = false
        basic.showNumber(ID)
    }
}
let players = 0
let destino = 0
let meQuiere = false
let ID = 0
Configuracion(3, 3)

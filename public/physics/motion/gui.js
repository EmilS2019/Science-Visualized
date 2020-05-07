const gui = new dat.GUI()

const wave = {
    phase: 0.1,
    amplitude: 70,
    frquency: 0.02,
    y: 10,
    speed: 0.1,
    color: 0
}
const wavefold = gui.addFolder('wave')
wavefold.add(wave, 'amplitude', -300, 300)
wavefold.add(wave, 'frquency', 0, 0.1)
wavefold.add(wave, 'y', -200, 450)
wavefold.add(wave, 'speed', -0.3, 0.3)

const color = {
    hue: 0,
    saturation: 50,
    brightness: 50
}
const colorfold = gui.addFolder('color')
colorfold.add(color, 'hue', 0, 255)
colorfold.add(color, 'saturation', 0, 100)
colorfold.add(color, 'brightness', 0, 100)

//wavefold.open()
//colorfold.open()
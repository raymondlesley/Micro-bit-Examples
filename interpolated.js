// Interpolated - smooth anti-aliasing

let scale = 50
let max_dist = 70
let maxx = 5 * scale

function brightness(x: number, y: number, coords: Array<number>) {
    let grid_x = x * scale
    let grid_y = y * scale
    let x_distance = Math.abs(coords[0] - grid_x)
    let y_distance = Math.abs(coords[1] - grid_y)
    if ((x_distance > max_dist) || (y_distance > max_dist)) {
        return 0;
    }
    else {
        let dist = Math.sqrt(x_distance*x_distance+y_distance*y_distance)
        let bright = 256 - dist * 256 / max_dist
        return bright
    }
}

function draw_grid(spot: Array<number>) {
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            led.plotBrightness(x, y, brightness(x, y, spot));
        }
    }
}

// 5x5 grid * scale
let x = 0
let y = 0
let dx = 2
let dy = 3
while (1) {
    let spot = [x, y]
    draw_grid(spot)
    x += dx
    y += dy
    if ((x >= maxx) || (x < 0)) {
        dx = 0 - dx
        x += dx
    }
    if ((y >= maxx) || (y < 0)) {
        dy = 0 - dy
        y += dy
    }
    basic.pause(1)
}

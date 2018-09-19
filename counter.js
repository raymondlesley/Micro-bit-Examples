// Blinker - random LED patterns

let temp_00: Image = images.createImage(`
    . . # # #
    . . # . #
    . . # . #
    . . # . #
    . . # # #
    `);
let temp_01: Image = images.createImage(`
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    `);
let temp_02: Image = images.createImage(`
    . . # # #
    . . . . #
    . . # # #
    . . # . .
    . . # # #
    `);
let temp_03: Image = images.createImage(`
    . . # # #
    . . . . #
    . . . # #
    . . . . #
    . . # # #
    `);
let temp_04: Image = images.createImage(`
    . . # . #
    . . # . #
    . . # # #
    . . . . #
    . . . . #
    `);
let temp_05: Image = images.createImage(`
    . . # # #
    . . # . .
    . . # # #
    . . . . #
    . . # # #
    `);
let temp_06: Image = images.createImage(`
    . . # # .
    . . # . .
    . . # # #
    . . # . #
    . . # # #
    `);
let temp_07: Image = images.createImage(`
    . . # # #
    . . . . #
    . . . # #
    . . . . #
    . . . . #
    `);
let temp_08: Image = images.createImage(`
    . . # # #
    . . # . #
    . . # # #
    . . # . #
    . . # # #
    `);
let temp_09: Image = images.createImage(`
    . . # # #
    . . # . #
    . . # # #
    . . . . #
    . . . # #
    `);
let temp_10: Image = images.createImage(`
    . # # # #
    . # # . #
    . # # . #
    . # # . #
    . # # # #
    `);
let temp_11: Image = images.createImage(`
    . # . . #
    . # . . #
    . # . . #
    . # . . #
    . # . . #
    `);
let temp_12: Image = images.createImage(`
    . # # # #
    . # . . #
    . # # # #
    . # # . .
    . # # # #
    `);
let temp_13: Image = images.createImage(`
    . # # # #
    . # . . #
    . # . # #
    . # . . #
    . # # # #
    `);
let temp_14: Image = images.createImage(`
    . # # . #
    . # # . #
    . # # # #
    . # . . #
    . # . . #
    `);
let temp_15: Image = images.createImage(`
    . # # # #
    . # # . .
    . # # # #
    . # . . #
    . # # # #
    `);
let temp_16: Image = images.createImage(`
    . # # # .
    . # # . .
    . # # # #
    . # # . #
    . # # # #
    `);
let temp_17: Image = images.createImage(`
    . # # # #
    . # . . #
    . # . # #
    . # . . #
    . # . . #
    `);
let temp_18: Image = images.createImage(`
    . # # # #
    . # # . #
    . # # # #
    . # # . #
    . # # # #
    `);
let temp_19: Image = images.createImage(`
    . # # # #
    . # # . #
    . # # # #
    . # . . #
    . # . # #
    `);
let temp_20: Image = images.createImage(`
    # # # # #
    . # # . #
    # # # . #
    # . # . #
    # # # # #
    `);
let temp_21: Image = images.createImage(`
    # # . . #
    . # . . #
    # # . . #
    # . . . #
    # # . . #
    `);
let temp_22: Image = images.createImage(`
    # # # # #
    . # . . #
    # # # # #
    # . # . .
    # # # # #
    `);
let temp_23: Image = images.createImage(`
    # # # # #
    . # . . #
    # # . # #
    # . . . #
    # # # # #
    `);
let temp_24: Image = images.createImage(`
    # # # . #
    . # # . #
    # # # # #
    # . . . #
    # # . . #
    `);
let temp_25: Image = images.createImage(`
    # # # # #
    . # # . .
    # # # # #
    # . . . #
    # # # # #
    `);
let temp_26: Image = images.createImage(`
    # # # # .
    . # # . .
    # # # # #
    # . # . #
    # # # # #
    `);
let temp_27: Image = images.createImage(`
    # # # # #
    . # . . #
    # # . # #
    # . . . #
    # # . . #
    `);
let temp_28: Image = images.createImage(`
    # # # # #
    . # # . #
    # # # # #
    # . # . #
    # # # # #
    `);
let temp_29: Image = images.createImage(`
    # # # # #
    . # # . #
    # # # # #
    # . . . #
    # # . # #
    `);
let temp_30: Image = images.createImage(`
    # # # # #
    . # # . #
    # # # . #
    . # # . #
    # # # # #
    `);
let counter = [
    temp_00,
    temp_01,
    temp_02,
    temp_03,
    temp_04,
    temp_05,
    temp_06,
    temp_07,
    temp_08,
    temp_09,
    temp_10,
    temp_11,
    temp_12,
    temp_13,
    temp_14,
    temp_15,
    temp_16,
    temp_17,
    temp_18,
    temp_19,
    temp_20,
    temp_21,
    temp_22,
    temp_23,
    temp_24,
    temp_25,
    temp_26,
    temp_27,
    temp_28,
    temp_29,
    temp_30,
];
for (let i = 0; i < counter.length; i++) {
    counter[i].showImage(0);
    // basic.pause(300);
}

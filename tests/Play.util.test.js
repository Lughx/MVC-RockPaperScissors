import { PlayUtil } from "../utils/Play.util.js"

const { play, randomNumber, numberDictionary } = PlayUtil()

test("numero random entre 1 y 3", () => {
    for (let i = 0; i < 20; i++) {
        const number = randomNumber(1, 3)
        
        expect(number).toBeGreaterThanOrEqual(1)
        expect(number).toBeLessThanOrEqual(3)
    }
})

// Piedra
test("Piedra vs piedra, empate", () => {
    expect(play(1, 1)).toBe("tie")
})

test("Piedra vs papel, pierde piedra", () => {
    expect(play(1, 2)).toBe("loss")
})

test("Piedra vs tijeras, gana piedra", () => {
    expect(play(1, 3)).toBe("win")
})

// Papel
test("Papel vs piedra, gana papel", () => {
    expect(play(2, 1)).toBe("win")
})

test("Papel vs papel, empate", () => {
    expect(play(2, 2)).toBe("tie")
})

test("Papel vs tijeras, pierde papel", () => {
    expect(play(2, 3)).toBe("loss")
})

// Tijeras
test("Tijeras vs piedra, pierde tijeras", () => {
    expect(play(3, 1)).toBe("loss")
})

test("Tijeras vs papel, gana tijeras", () => {
    expect(play(3, 2)).toBe("win")
})

test("Tijeras vs tijeras, empate", () => {
    expect(play(3, 3)).toBe("tie")
})
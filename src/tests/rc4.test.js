const rc4 = require("./rc4");

test("Key Plaintext", () => {
    expect(rc4("Key", "Plaintext")).toBe("bbf316e8d940af0ad3")
});

test("Wiki pedia", () => {
    expect(rc4("Wiki", "pedia")).toBe("1021BF0420".toLowerCase())
});

test("Secret Attack at dawn", () => {
    expect(rc4("Secret", "Attack at dawn")).toBe("45A01F645FC35B383552544B9BF5".toLowerCase())
});
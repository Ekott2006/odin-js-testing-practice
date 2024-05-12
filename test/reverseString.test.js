import reverseString from "../lib/reverseString";

test("Reverse String tests ", () => {
  expect(reverseString("hello world..!!")).toBe("!!..dlrow olleh");
});

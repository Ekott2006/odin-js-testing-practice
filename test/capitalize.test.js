import capitalize from "../lib/capitalize";

describe("Capitalize tests ", () => {
  test("Example 1", () => expect(capitalize("hello world")).toBe("Hello world"))
  test("Example 2", () => expect(capitalize("!hello world")).toBe("!hello world"));
});

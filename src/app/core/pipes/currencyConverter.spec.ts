import { CurrencyConverterPipe } from "./currencyConverter";

describe("CurrencyConverterPipe", () => {
  let pipe: CurrencyConverterPipe;

  beforeEach(() => {
    pipe = new CurrencyConverterPipe();
  });

  it("should convert price using exchange rate provided", () => {
    expect(pipe.transform("9.90", "1.13")).toEqual("11.187");
  });

  it("should return empty string for invalid price", () => {
    expect(pipe.transform("9TKxxx", "1.13")).toEqual("");
  });

  it("should return empty string for invalid rate", () => {
    expect(pipe.transform("9.90", "1XcERR")).toEqual("");
  });

  it("should return empty string - no value", () => {
    expect(pipe.transform("", "1.13")).toEqual("");
  });

  it("should return empty string - no rate", () => {
    expect(pipe.transform("9.90", "")).toEqual("");
  });
});

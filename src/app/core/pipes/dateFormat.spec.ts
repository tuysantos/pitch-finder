import { DateFormatPipe } from "./dateFormat";

describe("DateFormatPipe", () => {
  let pipe: DateFormatPipe;

  beforeEach(() => {
    pipe = new DateFormatPipe();
  });

  it("should transform '2018-01-09T09:20:00+00:00' to 'hh:mm d/m/y'", () => {
    expect(pipe.transform("2018-01-09T09:20:00+00:00")).toEqual(
      "09:20 09/01/2018"
    );
  });

  it("should return empty string", () => {
    expect(pipe.transform("")).toEqual("");
  });

  it("should return an error", () => {
    expect(pipe.transform("xxxxxxx")).toContain("Invalid date");
  });
});

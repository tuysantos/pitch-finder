import { DurationPipe } from "./duration";

describe("DurationPipe", () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it("should transform date1 and date2 to 'xx hour(s) and yy minute(s)'", () => {
    expect(
      pipe.transform("2018-01-09T09:20:00+00:00", "2018-01-09T10:00:00+00:00")
    ).toEqual("0 hour(s) and 40 minute(s)");
  });

  it("should return empty string - no date1", () => {
    expect(pipe.transform("", "2018-01-09T10:00:00+00:00")).toEqual("");
  });

  it("should return empty string - no date2", () => {
    expect(pipe.transform("2018-01-09T09:20:00+00:00", "")).toEqual("");
  });

  it("should return an error - invalid date1", () => {
    expect(pipe.transform("xxxxxxx", "2018-01-09T09:20:00+00:00")).toContain(
      "Invalid date1 or date2"
    );
  });

  it("should return an error - invalid date2", () => {
    expect(pipe.transform("2018-01-09T09:20:00+00:00", "xxxxxxxx")).toContain(
      "Invalid date1 or date2"
    );
  });
});

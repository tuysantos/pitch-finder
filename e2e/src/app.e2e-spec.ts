import { AppPage } from "./app.po";
import { browser, element, by } from "protractor";
import * as errors from "src/app/pitch/model/error-enum";

describe("workspace-project App", () => {
  let page: AppPage;
  const EC = browser.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should return invalid search - mandatory fields", async () => {
    page.navigateTo("/pitches");
    let pitchId = page.getPitchId();
    pitchId.sendKeys("92300");

    let startDate = page.getStartDate();
    startDate.sendKeys("2018-01-09");

    let endDate = page.getEndDate();
    endDate.sendKeys("2018-01-15");

    browser.sleep(1000);
    await page.getBtnSearch().click();
    browser.sleep(2000);
    expect(page.getErrorFilter()).toEqual(errors.MANDATORY_FIELDS);
  });

  it("should return invalid pitch Id", async () => {
    page.navigateTo("/pitches");
    let pitchId = page.getPitchId();
    pitchId.sendKeys("RRRRR34");

    let startDate = page.getStartDate();
    startDate.sendKeys("2018-01-09");

    let endDate = page.getEndDate();
    endDate.sendKeys("2018-01-15");

    browser.sleep(1000);
    await page.getBtnSearch().click();
    browser.sleep(2000);
    expect(page.getErrorFilter()).toEqual(errors.INVALID_PITCH_ID);
  });

  it("should return invalid date range", async () => {
    page.navigateTo("/pitches");
    let pitchId = page.getPitchId();
    pitchId.sendKeys("32990");

    let startDate = page.getStartDate();
    startDate.sendKeys("2018-01-02");

    let endDate = page.getEndDate();
    endDate.sendKeys("2018-01-28");

    browser.sleep(1000);
    await page.getBtnSearch().click();
    browser.sleep(2000);
    expect(page.getErrorFilter()).toEqual(errors.INVALID_DATE_RANGE);
  });

  it("should return error date2 should be greather", async () => {
    page.navigateTo("/pitches");
    let pitchId = page.getPitchId();
    pitchId.sendKeys("32990");

    let startDate = page.getStartDate();
    startDate.sendKeys("2018-01-21");

    let endDate = page.getEndDate();
    endDate.sendKeys("2018-01-15");

    browser.sleep(1000);
    await page.getBtnSearch().click();
    browser.sleep(2000);
    expect(page.getErrorFilter()).toEqual(errors.END_DATE_GREATER);
  });

  it("should load data from the url parameters", async () => {
    page.navigateTo("/pitches/32990/2018-01-09/2018-01-15");
    let pitches = await page.getPitches();
    expect(pitches.length).toBeGreaterThan(0);
  });

  it("should go to next page", async () => {
    page.navigateTo("/pitches/32990/2018-01-09/2018-01-15");
    browser.sleep(5000);

    await page.getPages()[1].click();
    browser.sleep(2000);

    let pitches = await page.getPitches();
    expect(pitches.length).toBeGreaterThan(0);
  });

  it("should return no data", async () => {
    page.navigateTo("/pitches/111111/2018-01-09/2018-01-15");
    browser.sleep(5000);

    let pitches = await page.getPitches();
    expect(pitches.length).toBe(0);
  });
});

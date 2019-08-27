import { AppPage } from "./app.po";
import { browser, element, by } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;
  let pitchId: any;
  let startDate: any;
  let endDate: any;
  const EC = browser.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
  });

  async function setSearchCriteria(pitch_Id, start_date, end_date) {
    pitchId = page.getPitchId();
    pitchId.sendKeys(pitch_Id);

    startDate = page.getStartDate();
    startDate.sendKeys(start_date);

    endDate = page.getEndDate();
    endDate.sendKeys(end_date);

    browser.sleep(1000);
    await startDate.click();
    browser.sleep(100);
    await endDate.click();
    browser.sleep(100);
    await pitchId.click();
    browser.sleep(100);
  }

  it("should return invalid search - mandatory fields", async () => {
    page.navigateTo("/pitches");
    await setSearchCriteria("", "2018-01-09", "2018-01-15");
    await page.getBtnSearch().click();
    browser.sleep(100);
    let message = page.getErrorFilter().getText();
    browser.sleep(3000);
    expect(message).toEqual("All fields are mandatory");
  });

  it("should return invalid pitch Id", async () => {
    page.navigateTo("/pitches");
    await setSearchCriteria("RRRRR34", "2018-01-09", "2018-01-15");
    await page.getBtnSearch().click();
    browser.sleep(100);
    let message = page.getErrorFilter().getText();
    browser.sleep(3000);
    expect(message).toEqual("Invalid Pitch Id");
  });

  it("should return invalid date range", async () => {
    page.navigateTo("/pitches");
    await setSearchCriteria("32990", "2018-01-02", "2018-01-28");
    await page.getBtnSearch().click();
    browser.sleep(100);
    let message = page.getErrorFilter().getText();
    browser.sleep(3000);
    expect(message).toEqual("Date range cannot exceed 14 days");
  });

  it("should return error date2 should be greather than date1", async () => {
    page.navigateTo("/pitches");
    await setSearchCriteria("32990", "2018-01-21", "2018-01-15");
    await page.getBtnSearch().click();
    browser.sleep(100);
    let message = page.getErrorFilter().getText();
    browser.sleep(3000);
    expect(message).toEqual("End date must be greater or equal to start date");
  });

  it("should load data from the url parameters", async () => {
    page.navigateTo("/pitches/32990/2018-01-09/2018-01-15");
    browser.sleep(1000);
    let pitches = await page.getPitches();
    browser.sleep(3000);
    expect(pitches.length).toBeGreaterThan(0);
  });

  it("should return no data", async () => {
    page.navigateTo("/pitches/1111/2018-01-09/2018-01-15");
    browser.sleep(1000);
    let pitches = await page.getPitches();
    browser.sleep(3000);
    expect(pitches.length).toBe(0);
  });
});

import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo(url: string) {
    return browser.get(url);
  }

  getTitleText() {
    return element(by.css("app-root h1")).getText();
  }

  getPitchId() {
    return element(by.id("pitchId"));
  }

  getStartDate() {
    return element(by.id("StartsId"));
  }

  getEndDate() {
    return element(by.id("EndsId"));
  }

  getBtnSearch() {
    return element(by.id("btnSearch"));
  }

  getErrorFilter() {
    return element(by.id("spErrorMessage"));
  }

  getPitches() {
    return browser.driver
      .findElements(by.css("div app-pitch-card"))
      .then(elems => {
        return elems;
      });
  }

  getPages() {
    return browser.driver.findElements(by.css("ul li")).then(elems => {
      return elems;
    });
  }
}

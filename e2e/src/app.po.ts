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
    return element(by.id("startsId"));
  }

  getEndDate() {
    return element(by.id("endsId"));
  }

  getHiddenStartDate() {
    return element(by.id("HiddenStartsId"));
  }

  getHiddenEndDate() {
    return element(by.id("HiddenEndsId"));
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
    return browser.driver
      .findElements(by.id("div app-pagination pageElement"))
      .then(elems => {
        return elems;
      });
  }
}

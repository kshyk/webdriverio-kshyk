class HomePage {
    get bellyButton() { return $('.pajacyk__clickbox') }
    get thanksInfo() { return $('.pajacyk__thankyou') }

    open () {
      return browser.url("https://www.pajacyk.pl/")
    }

    clickOnBelly() {
      this.bellyButton.click();
    }
}

module.exports = new HomePage();

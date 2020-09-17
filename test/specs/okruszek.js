describe("okruszek.org.pl page", function() {
    it("should give a piece of bread", () => {
        browser.url("http://www.okruszek.org.pl/");
        const breadButton = $(".click-crumb")
        breadButton.waitForExist({ timeout: 5000 })
        breadButton.click()
        const thanks = $("=DZIĘKUJEMY!")
        thanks.waitForExist({ timeout: 3000 })
        expect(thanks).toBeVisible();
    })
})

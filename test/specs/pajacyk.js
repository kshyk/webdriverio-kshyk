describe("pajacyk.pl page", function() {
    it("should have happy belly", () => {
        browser.url("https://www.pajacyk.pl/#index");
        const bellyButton = $(".paj-click")
        bellyButton.waitForExist({ timeout: 5000 })
        bellyButton.click()
        const thanks = $('=dziękujemy :)')
        thanks.waitForExist({ timeout: 3000 })
        expect(thanks).toBeVisible();
    })
})

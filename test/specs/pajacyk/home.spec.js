const HomePage = require('../../pages/pajacyk/home.page');

describe('Pajacyk application', () => {
    it('should say thanks when belly button clicked', () => {
        HomePage.open();
        HomePage.clickOnBelly();
        expect(HomePage.thanksInfo).toBeExisting();
        expect(HomePage.thanksInfo).toHaveTextContaining('dziękujemy :)');
    });
});

import { checkForUrl } from "../src/client/js/urlChecker"


describe("Testing the urlChecker functionality", () => {
    test("Testing the checkForUrl() function", () => {
        let correctInput="www.test.org";
        let wrongInput="test";
        
        
        expect(checkForUrl(correctInput)).toEqual(true);
        expect(checkForUrl(wrongInput)).toEqual(false);
    })
        
});
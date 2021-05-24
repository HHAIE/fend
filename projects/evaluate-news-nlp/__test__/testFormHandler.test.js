import { createFormData } from "../src/client/js/formHandler"



describe("Testing the Form Handler", () => {
    
    test("Testing the createFormData() function", () => {
        
        
        expect(createFormData()).toBeDefined();

    })
        
});
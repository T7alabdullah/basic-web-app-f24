import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "thali"
          ));
    });

    test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Talal"
          ));
    });

    test('should return 33 plus 23?', () => {
        const query = "What is 33 plus 23?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "56"
          ));
    });

    test('should return 95', () => {
        const query = "Which of the following numbers is the largest: 87, 47, 95?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "95"
          ));
    });

    test('should return 77', () => {
        const query = "Which of the following numbers is the largest: 77, 43, 12?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "77"
          ));
    });

    test('should return 46', () => {
        const query = "What is 23 multiplied by 2?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "46"
          ));
    });

    test('should return the result of 96 minus 50', () => {
        const query = "What is 96 minus 50?";
        const response = QueryProcessor(query);
        expect(response).toBe("46");
      });






});

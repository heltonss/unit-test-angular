import { getCurrencies } from "app/02-arrays-and-strings/getCurrencies";


describe('getCurrencies', () => {
    it('should return the supported currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});
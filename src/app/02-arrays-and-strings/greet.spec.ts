import { greet } from 'app/02-arrays-and-strings/greet';

describe('greet', () => {
    it('should include the name in the message', () => {
        expect(greet('mosh')).toContain('mosh');
    });
})
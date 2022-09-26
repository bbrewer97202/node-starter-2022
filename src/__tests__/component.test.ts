import { addTwoNumbers } from '../component';

describe('addTwoNumbers', () => {
  it('should add two numbers', () => {
    expect(addTwoNumbers(10, 20)).toEqual(30);
  });
});

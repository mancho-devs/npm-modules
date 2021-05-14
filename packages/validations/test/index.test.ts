import { validateForPositiveNumber } from '..';

describe('validateForPositiveNumber', () => {
  it('should throw exception if value is below zero', async () => {
    const error = new Error('The parameter value must be greater than zero.');

    expect.assertions(1);

    try {
      await validateForPositiveNumber(-50);
    } catch (err) {
      expect(err).toEqual(error);
    }
  });

  it('should throw exception if value is not number', async () => {
    const error = new Error('The value must be a valid number.');

    expect.assertions(1);

    try {
      await validateForPositiveNumber('0' as any);
    } catch (err) {
      expect(err).toEqual(error);
    }
  });
});
const assert = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return 6 when type is SUM, a = 1.4, b = 4.5', () => {
    expect(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return -4 when type is SUBTRACT, a = 1.4, b = 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return 0.2 when type is DIVIDE, a = 1.4, b = 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when type is DIVIDE, a = 1.4, b = 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});

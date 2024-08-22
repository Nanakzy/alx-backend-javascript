const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment').sendPaymentRequestToApi;

describe('sendPaymentRequestToApi', () => {
  it('validates the usage of Utils.calculateNumber', () => {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWith('The total is: 120')).to.be.true;

    // Restore the original methods
    spy.restore();
    stub.restore();
  });
});

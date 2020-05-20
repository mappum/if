const assert = require('assert');
const If = require('../index.js');

describe('If()', () => {
  it('self-instantiates', () => {
    assert.equal(If(true).__proto__, If.prototype);
  });
  it('executes code if condition is true', () => {
    let some_var = 0;
    If(true).Then(() => some_var = 1);
    assert.equal(some_var, 1);
  });
  it('does not execute code if condition is false', () => {
    let some_var = 0;
    If(false).Then(() => some_var = 1);
    assert.equal(some_var, 0);
  });
  it('does not execute code when condition is non-bool falsy', () => {
    let some_var = 0;
    If(0).Then(() => some_var = 1);
    assert.equal(some_var, 0);
  });
  it('executes code when condition is non-bool truthy', () => {
    let some_var = 0;
    If(1).Then(() => some_var = 1);
    assert.equal(some_var, 1);
  });
  it('executes only the code in "Else" when condition is false', () => {
    let a = 0;
    let b = 0;
    If(false).Then(() => a = 1).Else(() => b = 1);
    assert.equal(a, 0);
    assert.equal(b, 1);
  });
  it('executes only the code in "Then" when condition is true', () => {
    let a = 0;
    let b = 0;
    If(true).Then(() => a = 1).Else(() => b = 1);
    assert.equal(a, 1);
    assert.equal(b, 0);
  });
  it('chains if-else-if correctly', () => {
    let a = 0;
    let b = 0;
    let c = 0;
    If(false).Then(() => a = 1).Else().If(false).Then(() => b = 1).Else(() => c = 1);
    assert.equal(a, 0);
    assert.equal(b, 0);
    assert.equal(c, 1);
  });
});

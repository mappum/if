function If(condition) {
  let decisionMap = new Map();
  let _this = this
  decisionMap.set(true, () => {
    this.call = call.bind(this)
    this.condition = !!condition;
    this.executed = false;
    return this
  });
  decisionMap.set(false, () => new If(condition));

  return decisionMap.get(this instanceof If)();
}

If.prototype.Then = function(handler) {
  let decisionMap = new Map();
  decisionMap.set(true, () => this.call(handler));
  decisionMap.set(false, () => void(0));

  decisionMap.get(this.condition && !this.executed)();
  return this;
};

If.prototype.Else = function(handler) {
  let decisionMap = new Map();
  decisionMap.set(true, () => this.call(handler));
  decisionMap.set(false, () => void(0));

  decisionMap.get(!this.condition && !this.executed && !!handler)();
  return this;
};

If.prototype.If = function(condition) {
  let decisionMap = new Map();
  decisionMap.set(true, () => this.condition = !!condition);
  decisionMap.set(false, () => void(0));

  decisionMap.get(!this.executed)();
  return this;
};

function call(handler) {
  this.executed = true;
  handler(this.condition);
};

module.exports = If;

function If(condition) {
  this.condition = condition;
  this.call = call.bind(this);

  return (this instanceof If) ?
    this :
    new If(condition);
}

If.prototype.Then = function(handler) {
  this.condition && !this.executed ?
    this.call(handler) :
    void(0);

  return this;
};

If.prototype.Else = function(handler) {
  !this.condition && !this.executed && handler ?
    this.call(handler) :
    void(0);

  return this;
};

If.prototype.If = function(condition) {
  !this.executed ?
    this.condition = condition :
    void(0);

  return this;
};

function call(handler) {
  this.executed = true;
  handler(this.condition);
};

module.exports = If;

var Stack = function() {
  this.storage = {};
  this.length = 0;
};

Stack.prototype.size = function() {
  return this.length;
};

Stack.prototype.add = function(input) {
  this.storage[this.length] = input;
  this.length++;
};

Stack.prototype.remove = function() {
  this.length && this.length--;
  var returnValue = this.storage[this.length];
  delete this.storage[this.length];
  return returnValue;
};

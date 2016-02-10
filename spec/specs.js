describe('stack', function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });
  it('reports a size of 0 for a new stack', function() {
    expect(stack.size()).to.equal(0);
  });
  it('reports a size of 1 after adding a value', function() {
    stack.add(null);
    expect(stack.size()).to.equal(1);
  });
  it('should be able to remove a value', function() {
    stack.add(true);
    var returnValue = stack.remove();
    expect(returnValue).to.equal(true);
    expect(stack.size()).to.equal(0);
  });
  it('should not be built using an array', function() {
    for (var key in stack) {
      if (stack.hasOwnProperty(key)) {
          expect(Array.isArray(stack[key])).to.equal(false);
      }
    }
  });
});

describe('queue', function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });
  it('reports a size of 0 for a new stack', function() {
    expect(stack.size()).to.equal(0);
  });
  it('reports a size of 1 after adding a value', function() {
    stack.add(null);
    expect(stack.size()).to.equal(1);
  });
  it('should be able to remove a value', function() {
    stack.add(true);
    var returnValue = stack.remove();
    expect(returnValue).to.equal(true);
    expect(stack.size()).to.equal(0);
  });
  it('should not be built using an array', function() {
    for (var key in stack) {
      if (stack.hasOwnProperty(key)) {
          expect(Array.isArray(stack[key])).to.equal(false);
      }
    }
  });
});

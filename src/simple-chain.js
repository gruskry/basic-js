const chainMaker = {
  res: [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    if (value === null) {
      value = 'null';
    }
    this.res.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || isNaN(position - 1)) {
      this.res=[]; 
      throw new Error();
    }
    let ch = this.res;
    this.res = ch.filter((item, index) => {
      if (position - 1 !== index) {
        return true;
      } else {
        return false;
      }
    });
    return this;

  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    result = '( ' + this.res.join(' )~~( ') + ' )';
    this.res = [];
    return result;
  }
};

module.exports = chainMaker;


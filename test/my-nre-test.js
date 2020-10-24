const assert = require('assert');

describe('A series of tests for VectorCalculator object', () => {
  let vectA = {x: 1, y: 2}
  let vectB = {x: 2, y: 1}
  let vcalc = new VectorCalculator()
  it('should sum two vectors', () => {
    let resVect = {x: 3, y:3}
    assert.strictEqual(resVect, vcalc.sum(vectA, vectB));
  })

  it('should sub two vectors', () => {
    let resVect = {x: -1, y:1}
    assert.strictEqual(resVect, vcalc.sub(vectA, vectB));
  })

  it('should multiply by scalar', () => {
    let xScal = 2
    let resVect = {x: 2, y:4}
    assert.strictEqual(resVect, vcalc.sub(vectA, xScal));
  })

  it('should dot prod two vectors', () => {
    let res = 4
    assert.strictEqual(res, vcalc.dot(vectA, vectB));
  })
})

describe('A series of tests for BankAccount object', () => {
  it('should get current ammount', () => {
    let bankAccountA = new BankAccount(3.0, ["op1", "op2"])
    let res = 3.0
    assert.strictEqual(res, bankAccountA.current());
  })

  it('should append and return current ammount', () => {
    let bankAccountA = new BankAccount(3.0, ["op1", "op2"])
    let res = 5.0
    bankAccountA.append(2.0)
    assert.strictEqual(res, bankAccountA.current());
  })

  it('should substract and return current ammount', () => {
    let bankAccountA = new BankAccount(3.0, ["op1", "op2"])
    let res = 3.0
    bankAccountA.substract(2.0)
    assert.strictEqual(res, bankAccountA.current());
  })

  it('should merge', () => {
    let bankAccountA = new BankAccount(3.0, ["op1", "op2"])
    let bankAccountB = new BankAccount(-5.0, ["op3", "op4"])
    let mergedAccountRes = new BankAccount(-2.0, ["op1", "op2", "op3", "op4"])
    bankAccountA.merge(bankAccountB)
    assert.strictEqual(mergedAccountRes.current(), bankAccountA.current())
    assert.strictEqual(mergedAccountRes.historial(), bankAccountA.historial());
  })

  it('should return historial', () => {
    let bankAccountA = new BankAccount(3.0, ["op1", "op2"])
    let res = ["op1", "op3"]
    assert.strictEqual(res, bankAccountA.historial());
  })
})

class VectorCalculator {
  sum(a,b) {
    return 0;
  }

  sub(a,b) {
    return 0;
  }

  scalar(a, x) {
    return "vector";
  }

  dot(a, b) {
    return 0;
  }
}

class BankAccount {
  constructor(saldo, historial) {
    this.saldoActual = saldo;
    this.historial = historial;
  }

  current() {
    return 0.0;
  }

  append(amount) {
    return 0.0;
  }

  substract(amount) {
    return 0.0;
  }

  merge(account) {
    
  }

  history() {
    return [{}];
  }
}
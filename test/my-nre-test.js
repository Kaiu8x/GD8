const assert = require('assert');

describe('A series of tests for VectorCalculator object', () => {
  
  it('should sum two vectors', () => {
    let vectA = {x: 1, y: 2}
    let vectB = {x: 2, y: 1}
    let vcalc = new VectorCalculator()
    let resVect = {x: 3, y:3}
    assert.deepStrictEqual(resVect, vcalc.sum(vectA, vectB));
  })

  it('should sub two vectors', () => {
    let vectA = {x: 1, y: 2}
    let vectB = {x: 2, y: 1}
    let vcalc = new VectorCalculator()
    let resVect = {x: -1, y:1}
    assert.deepStrictEqual(resVect, vcalc.sub(vectA, vectB));
  })

  it('should multiply by scalar', () => {
    let vectA = {x: 1, y: 2}
    let vectB = {x: 2, y: 1}
    let vcalc = new VectorCalculator()
    let xScal = 2
    let resVect = {x: 2, y:4}
    assert.deepStrictEqual(resVect, vcalc.scalar(vectA, xScal));
  })

  it('should dot prod two vectors', () => {
    let vectA = {x: 1, y: 2}
    let vectB = {x: 2, y: 1}
    let vcalc = new VectorCalculator()
    let res = 4
    assert.deepStrictEqual(res, vcalc.dot(vectA, vectB));
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
    let res = 1.0
    bankAccountA.substract(2.0)
    assert.strictEqual(res, bankAccountA.current());
  })

  it('should merge', () => {
    let bankAccountA = new BankAccount(3.0, ["op1", "op2"])
    let bankAccountB = new BankAccount(-5.0, ["op3", "op4"])
    let mergedAccountRes = new BankAccount(-2.0, ["op1", "op2", "op3", "op4"])
    bankAccountA.merge(bankAccountB)
    assert.strictEqual(mergedAccountRes.current(), bankAccountA.current())
    assert.deepStrictEqual(mergedAccountRes.history(), bankAccountA.history());
  })

  it('should return historial', () => {
    let bankAccountA = new BankAccount(3.0, ["op1", "op2"])
    let res = ["op1", "op2"]
    assert.deepStrictEqual(res, bankAccountA.history());
  })
})

class VectorCalculator {
  sum(a,b) {
    return {x: a.x + b.x, y: a.y + b.y};
  }

  sub(a,b) {
    return {x: a.x - b.x, y: a.y - b.y};
  }

  scalar(a, x) {
    return {x: a.x * x, y: a.y * x};
  }

  dot(a, b) {
    return a.x * b.x + a.y * b.y;
  }
}

class BankAccount {
  constructor(saldo, historial) {
    this.saldoActual = saldo;
    this.historial = historial;
  }

  current() {
    return this.saldoActual;
  }

  append(amount) {
    this.saldoActual += amount
    return this.saldoActual;
  }

  substract(amount) {
    this.saldoActual -= amount
    return this.saldoActual;
  }

  merge(account) {
    this.saldoActual += account.saldoActual
    this.historial = this.historial.concat(account.historial);
  }

  history() {
    return this.historial;
  }
}
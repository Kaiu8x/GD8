const assert = require('assert');



describe('A series of tests', () => {
  describe('String is correct', () => {
    it('Should say Hello World!', () => {
      let comment = 'Jello World!'
      assert.strictEqual("Jello World!", comment);
    })
  }),

  describe('Check book total price', () =>{
    it('Total Price should be 1.16*subtotal', () => {
      let total = 1.16
      assert.strictEqual(total, myBook.getTotal());
    })
  }),

  describe('getFullTitle', () => {
    it('should return the full title {title} - {author}', () => {
      let testFullTitle = "Kai's journey to Kakariko Village-Kai"
      assert.strictEqual(testFullTitle, myBook.getFullTitle());
    })
  })
  
})


class Book {
  constructor(author, title, subtotal) {
    this.author = author
    this.title = title
    this.subtotal = subtotal
  }

  getTotal() {
    return this.subtotal * 1.16;
  }

  getFullTitle() {
    return this.title + "-" + this.author;
  }
}
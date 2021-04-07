function B(name) {
  this.name = name;
}

function A(name, age) {
  _extends(A, B); //将A的原型指向B。
  Object.getPrototypeOf(A).call(this, name); //super
  this.age = age;
  return this;
}

function _extends(A, B) {
  A.prototype.__proto__ = B.prototype;
  A.prototype.constructor = A;
  Object.setPrototypeOf(A, B); //这是核心
}

const a = new A("ldz", "28");
function ab() {
  console.log(a);
}
ab();

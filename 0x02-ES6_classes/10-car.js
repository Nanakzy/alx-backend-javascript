export default class Car {
  constructor(brand, motor, color) {
    this["_brand"] = brand;
    this["_motor"] = motor;
    this["_color"] = color;
  }

  get brand() {
    return this["_brand"];
  }

  get motor() {
    return this["_motor"];
  }

  get color() {
    return this["_color"];
  }

  cloneCar() {
    const Constructor = this.constructor;
    const clonedCar = new Constructor(this["_brand"], this["_motor"], this["_color"]);
    return clonedCar;
  }
}

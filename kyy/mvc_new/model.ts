import { Model } from "./controller";

export class ModelImpl implements Model {
  private _name: string;
  private _age: number;
  // getter 함수
  get name(): string {
    return this._name;
  }

  // setter 함수
  set name(value: string) {
    if (value.length > 3) {
      this._name = value;
    }
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

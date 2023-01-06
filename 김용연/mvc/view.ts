import { Model } from "./model";

export class View {
  draw(model: Model) {
    return `<h1>내이름은 ${model.name} 입니다, 내 나이는 ${model.age} 입니다.</h1>`;
  }

  constructor() {}
}

import { Model } from "./model";
import { View } from "./view";

export class Controller {
  private member: Model;

  eventNameInput(e: any) {
    this.member.name = e.target.value;
  }

  eventAgeInput(e: any) {
    this.member.age = e.target.value;
  }

  render() {
    new View().draw(this.member);
  }

  constructor() {}
}

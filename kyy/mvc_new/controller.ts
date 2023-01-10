export interface Model {
  name: string;
  age: number;
}

export interface View {
  draw(model: Model);
}

export class Controller {
  private member: Model;
  private view: View;

  constructor(member: Model, view: View) {
    this.view = view;
    this.member = member;
  }

  public eventNameInput(e: any) {
    this.member.name = e.target.value;
  }

  public eventAgeInput(e: any) {
    this.member.age = e.target.value;
  }

  public render() {
    this.view.draw(this.member);
  }
}

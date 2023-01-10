import { Controller } from "./controller";
import { ModelImpl } from "./model";
import { ViewImpl } from "./view";

export class Main {
  public ctl: Controller;
  constructor(selector: any) {
    this.ctl = new Controller(new ModelImpl(), new ViewImpl());

    // 리스너 장착

    // 화면 렌더링 장착
  }
}

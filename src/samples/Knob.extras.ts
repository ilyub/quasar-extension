import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Knob.Word {}
    }
  }
}

export namespace Knob {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Leading: true;
    readonly TrailingText: true;
  }
}
